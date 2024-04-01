/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "i.ibb.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
