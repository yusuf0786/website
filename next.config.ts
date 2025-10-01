import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({ extension: /\.(md|mdx)$/ })

const nextConfig: NextConfig = {
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
}

export default withMDX(nextConfig)
