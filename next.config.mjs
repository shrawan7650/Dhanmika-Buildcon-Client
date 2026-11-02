
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
          // Admin authentication API
      {
        source: "/api/setAuthCookie",
        destination: `${ADMIN_URL}/api/setAuthCookie`,
      },
      // Admin CSS, JS and static files
      {
        source: "/admin/_next/:path*",
        destination:
          "https://dhanmika-buildcon-admin.vercel.app/_next/:path*",
      },

      // Admin pages
      {
        source: "/admin",
        destination:
          "https://dhanmika-buildcon-admin.vercel.app/admin",
      },
      {
        source: "/admin/:path*",
        destination:
          "https://dhanmika-buildcon-admin.vercel.app/admin/:path*",
      },
    ],
  };
},

};

export default nextConfig;
