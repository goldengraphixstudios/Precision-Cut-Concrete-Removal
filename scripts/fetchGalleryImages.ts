import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";

const images = [
  { file: "driveway-removal.jpg", id: "HowVHskwNbo" },
  { file: "slab-cutting.jpg", id: "iP5CZAvxI00" },
  { file: "core-drilling.jpg", id: "eLDNqclI9fQ" },
  { file: "pool-deck.jpg", id: "he06TeZqk8w" },
  { file: "trenching.jpg", id: "7q0wlHUZL3c" },
  { file: "interior-saw.jpg", id: "rNmP2tNFHw0" },
];

const outputDir = path.join(process.cwd(), "public", "gallery");

async function fetchImage(file: string, id: string) {
  const target = path.join(outputDir, file);
  if (fs.existsSync(target)) {
    console.log(`Skipping ${file} (already exists)`);
    return;
  }

  const url = `https://unsplash.com/photos/${id}/download?force=true`;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await fetch(url, { redirect: "follow" });
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      await fsp.writeFile(target, Buffer.from(arrayBuffer));
      console.log(`Downloaded ${file}`);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1200 * attempt));
  }

  throw new Error(`Failed to download ${file} after retries.`);
}

async function run() {
  await fsp.mkdir(outputDir, { recursive: true });
  for (const item of images) {
    await fetchImage(item.file, item.id);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
