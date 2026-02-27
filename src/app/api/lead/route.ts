import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  address: string;
  service: string;
  details: string;
  contact: string;
}

const requiredFields = ["name", "phone", "address", "service", "details", "contact"];

async function logLead(lead: LeadPayload & { receivedAt: string }) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "leads.json");

  await fs.mkdir(dataDir, { recursive: true });

  let existing: Array<LeadPayload & { receivedAt: string }> = [];
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  existing.unshift(lead);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const missing = requiredFields.filter(
      (field) => !body[field as keyof LeadPayload]?.toString().trim()
    );

    if (missing.length > 0) {
      return NextResponse.json(
        { message: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const lead = {
      ...body,
      receivedAt: new Date().toISOString(),
    };

    if (process.env.NODE_ENV !== "production") {
      await logLead(lead);
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      LEAD_TO_EMAIL,
      LEAD_FROM_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !LEAD_TO_EMAIL || !LEAD_FROM_EMAIL) {
      return NextResponse.json(
        {
          message:
            "Email is not configured. Add SMTP credentials in the environment.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: SMTP_USER
        ? {
            user: SMTP_USER,
            pass: SMTP_PASS,
          }
        : undefined,
    });

    const subject = `New concrete cutting lead - ${lead.name}`;
    const text = `New lead received\n\nName: ${lead.name}\nPhone: ${lead.phone}\nEmail: ${lead.email || "N/A"}\nAddress: ${lead.address}\nService: ${lead.service}\nPreferred contact: ${lead.contact}\nDetails: ${lead.details}`;

    const html = `
      <h2>New lead received</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Email:</strong> ${lead.email || "N/A"}</p>
      <p><strong>Address:</strong> ${lead.address}</p>
      <p><strong>Service:</strong> ${lead.service}</p>
      <p><strong>Preferred contact:</strong> ${lead.contact}</p>
      <p><strong>Details:</strong> ${lead.details}</p>
    `;

    await transporter.sendMail({
      from: LEAD_FROM_EMAIL,
      to: LEAD_TO_EMAIL,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}



