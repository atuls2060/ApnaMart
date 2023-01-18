/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns:[{
      protocol:"https",
      hostname:"m.media-amazon.com",
      port:"",
      pathname:"**"
    }]
  }
}

module.exports = nextConfig
