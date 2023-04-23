/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/resume",
        permanent: false, // 307 redirect
      },
    ];
  },
};

module.exports = nextConfig;
