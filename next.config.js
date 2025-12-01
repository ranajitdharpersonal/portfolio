/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Eta production build er somoy eslint error ignore korbe
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig