import type { NextConfig } from 'next'
import nextMDX from '@next/mdx'

const withMDX = nextMDX()

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default withMDX(nextConfig)
