/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'links.papareact.com',
      'www.pakutaso.com'
    ],
  },
  env: {
    googlemap_key: 'AIzaSyBo6xPfjqhtnXp5Wl2guaROyvF5w3k9z8g'
  },
}

module.exports = nextConfig
