import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Modify the Webpack configuration for better file watching during development
    if (!isServer) {
      config.watchOptions = {
        poll: 1000, // Poll for changes every second
        aggregateTimeout: 300, // Delay rebuild after changes
      };
    }

    return config;
  },
};

export default nextConfig;
