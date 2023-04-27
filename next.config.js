/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: "/",
        permanent: false, // 307 redirect
      },
    ];
  },
};

module.exports = nextConfig;
