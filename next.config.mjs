/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages hosting.
  // This will output a fully static site to `./out/` when you run `next build`.
  output: "export",

  // Append a trailing slash to all URLs so the GitHub Pages static host
  // serves `/about/index.html` for `/about`.
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
