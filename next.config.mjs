import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Build plain HTML into out/ so the site can be hosted on GitHub Pages
  output: 'export',
  // GitHub Pages has no image server, so serve images as-is
  images: { unoptimized: true },
  // Emit works/index.html etc., which every static host resolves cleanly
  trailingSlash: true,
}
 
const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: ['remark-prism', 'remark-gfm']
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)