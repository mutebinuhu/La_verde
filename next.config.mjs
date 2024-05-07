/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
        ],
      },
};

export default nextConfig;
