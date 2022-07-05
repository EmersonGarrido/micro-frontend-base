module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `http://localhost:3001/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `http://localhost:3001/blog/:path*`,
      },
      {
        source: '/app',
        destination: `http://localhost:3002/app`,
      },
      {
        source: '/app/:path*',
        destination: `http://localhost:3002/app/:path*`,
      },
    ]
  },
}
