"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { serviceOptions } from "@/lib/data";

const inputBase =
  "w-full rounded-lg border border-steel/15 bg-white px-4 py-3 text-sm text-steel placeholder:text-steel/40 focus:border-safety focus:outline-none focus:ring-1 focus:ring-safety";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [toast, setToast] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    details: "",
    contact: "Call",
  });

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!form.address.trim()) nextErrors.address = "Address or city is required.";
    if (!form.service.trim()) nextErrors.service = "Select a service.";
    if (!form.details.trim()) nextErrors.details = "Tell us about the job.";
    if (!form.contact.trim()) nextErrors.contact = "Select contact method.";
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setToast(null);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send request.");
      }

      setStatus("success");
      setToast("Request sent. We will contact you shortly.");
      setTimeout(() => router.push("/thank-you"), 900);
    } catch (error) {
      setStatus("error");
      setToast(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or text us."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-steel/10 bg-white p-6 shadow-card"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Name
          </label>
          <input
            className={inputBase}
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-safety">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Phone
          </label>
          <input
            className={inputBase}
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-safety">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Email (optional)
          </label>
          <input
            className={inputBase}
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Address / City
          </label>
          <input
            className={inputBase}
            value={form.address}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, address: event.target.value }))
            }
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "address-error" : undefined}
          />
          {errors.address && (
            <p id="address-error" className="mt-1 text-xs text-safety">
              {errors.address}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Service Needed
          </label>
          <select
            className={inputBase}
            value={form.service}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, service: event.target.value }))
            }
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-safety">
              {errors.service}
            </p>
          )}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
            Preferred Contact
          </label>
          <select
            className={inputBase}
            value={form.contact}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, contact: event.target.value }))
            }
          >
            {[
              "Call",
              "Text",
              "Email",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.25em] text-steel/60">
          Project Details
        </label>
        <textarea
          className={`${inputBase} min-h-[140px]`}
          value={form.details}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, details: event.target.value }))
          }
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-error" : undefined}
        />
        {errors.details && (
          <p id="details-error" className="mt-1 text-xs text-safety">
            {errors.details}
          </p>
        )}
        <p className="mt-2 text-xs text-steel/50">
          Photos help. If you have them, attach via text after submitting.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Request Free Estimate"}
        </Button>
        <p className="text-xs text-steel/50">
          We respond quickly during normal business hours.
        </p>
      </div>
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-lg border px-4 py-3 text-sm ${
            status === "error"
              ? "border-ember/60 text-ember"
              : "border-safety/50 text-safety"
          }`}
        >
          {toast}
        </div>
      )}
    </form>
  );
}



