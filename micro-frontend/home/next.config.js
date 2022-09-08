const BASE_URL = {
  blog: process.env.NODE_ENV === 'production' ? 'https://sorteio-de-nomes.vercel.app' : 'http://localhost:3001',
  app: process.env.NODE_ENV === 'production' ? 'https://app-micro-frontend-base.vercel.app' : 'http://localhost:3002',
  reactjs: process.env.NODE_ENV === 'production' ? 'https://app-reactjs-micro-frontend-base.vercel.app' : 'http://localhost:3003',
  widget: process.env.NODE_ENV === 'production' ? 'https://widget-two-black.vercel.app' : 'http://localhost:3004',
}

module.exports = {
  async rewrites() {
    return {
      fallback: [

        //Blog
        {
          source: '/blog',
          destination: `${BASE_URL.blog}/blog`,
        },
        {
          source: '/blog/:path*',
          destination: `${BASE_URL.blog}/blog/:path*`,
        },

        // App Nextjs
        {
          source: '/app',
          destination: `${BASE_URL.app}/app`,
        },
        {
          source: '/app/:path*',
          destination: `${BASE_URL.app}/app/:path*`,
        },

        // App ReactJS
        {
          source: '/reactjs',
          destination: `${BASE_URL.reactjs}/reactjs`,
        },
        {
          source: '/reactjs/:path*',
          destination: `${BASE_URL.reactjs}/reactjs/:path*`,
        },

        // Widget
        {
          source: '/:path*',
          destination: `${BASE_URL.widget}/:path*`,
        },
      ]
    }
  },
}
