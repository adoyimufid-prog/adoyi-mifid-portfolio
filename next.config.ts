import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% statique : le build produit un dossier out/ a deposer sur Netlify.
  output: "export",
  // L'optimisation d'images de Next exige un serveur ; en export statique on la desactive.
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
