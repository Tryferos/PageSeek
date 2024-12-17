import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.us.archive.org',
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
    ],
  },
};

export default nextConfig;
