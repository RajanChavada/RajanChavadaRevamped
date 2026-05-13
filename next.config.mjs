/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/Rajan_Chavada_Resume_Summer2026.pdf",
        destination: "/resume.pdf",
        permanent: true,
      },
      {
        source: "/Rajan_Chavada_Resume.pdf",
        destination: "/resume.pdf",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
