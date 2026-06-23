import createMDX from "@next/mdx";
import path from "node:path";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default withMDX(nextConfig);
