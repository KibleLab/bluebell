/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [__dirname, 'styles'],
  },
};

module.exports = nextConfig;
