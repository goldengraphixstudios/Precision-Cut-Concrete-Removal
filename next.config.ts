import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));

const repoName = "Precision-Cut-Concrete-Removal";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";
const siteUrl = isGithubPages
  ? `https://goldengraphixstudios.github.io/${repoName}`
  : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  images: {
    unoptimized: isGithubPages,
  },
  trailingSlash: isGithubPages,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: isGithubPages ? "true" : "false",
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root,
  },
};

export default nextConfig;
