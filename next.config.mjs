// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
