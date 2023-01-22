/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "firebasestorage.googleapis.com",
      port: "",
      pathname: "**"
    },
    {
      protocol: "https",
      hostname: "m.media-amazon.com",
      port: "",
      pathname: "**"
    },
    {
      protocol: "https",
      hostname: "images-eu.ssl-images-amazon.com",
      port: "",
      pathname: "**"
    },
    {
      protocol: "https",
      hostname: "i.ibb.co",
      port: "",
      pathname: "**"
    }
    ]
  }
}

module.exports = nextConfig
