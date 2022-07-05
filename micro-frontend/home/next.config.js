const BASE_URL = {
  blog: process.env.NODE_ENV === 'production' ? 'https://blog-micro-frontend-base.vercel.app' : 'http://localhost:3001',
  app: process.env.NODE_ENV === 'production' ? 'https://app-micro-frontend-base.vercel.app' : 'http://localhost:3002',
  reactjs: process.env.NODE_ENV === 'production' ? 'https://reactjs-micro-frontend-base.vercel.app' : 'http://localhost:3003',
}

module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/blog',
          destination: `${BASE_URL.blog}/blog`,
        },
        {
          source: '/blog/:path*',
          destination: `${BASE_URL.blog}/blog/:path*`,
        },
        {
          source: '/app',
          destination: `${BASE_URL.app}/app`,
        },
        {
          source: '/app/:path*',
          destination: `${BASE_URL.app}/app/:path*`,
        },
        {
          source: '/reactjs',
          destination: `${BASE_URL.reactjs}/:path*`,
        },
        {
          source: '/reactjs/:path*',
          destination: `${BASE_URL.reactjs}/reactjs/:path*`,
        },
      ]
    }
  },
}
