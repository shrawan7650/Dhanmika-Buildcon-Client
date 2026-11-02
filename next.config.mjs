
/** @type {import('next').NextConfig} */

const ADMIN_URL = "https://dhanmika-buildcon-admin.vercel.app";

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

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/admin",
          destination: `${ADMIN_URL}/admin`,
        },
        {
          source: "/admin/:path*",
          destination: `${ADMIN_URL}/admin/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
