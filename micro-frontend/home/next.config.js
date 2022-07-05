module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `https://blog-micro-frontend-base.vercel.app/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://blog-micro-frontend-base.vercel.app/blog/:path*`,
      },
      {
        source: '/app',
        destination: `https://app-micro-frontend-base.vercel.app/app`,
      },
      {
        source: '/app/:path*',
        destination: `https://app-micro-frontend-base.vercel.app/app/:path*`,
      },
    ]
  },
}
