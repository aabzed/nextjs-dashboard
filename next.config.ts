import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    ppr: 'incremental'
  },
  // ... rest of the configuration.
  output: "standalone",

};

export default nextConfig;
