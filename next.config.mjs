/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akfgfragments.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  }
}

export default nextConfig