/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      protocol:"https",
      hostname:"m.media-amazon.com",
      port:"",
      pathname:"**"
    },
    {
      protocol:"https",
      hostname:"m.media-amazon.com",
      port:"",
      pathname:"/images/I/**"
    },
  ],
  }
}

module.exports = nextConfig
