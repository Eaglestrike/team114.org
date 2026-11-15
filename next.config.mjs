/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    // Old History page URL
    async redirects() {
        return [{ source: '/snoopy', destination: '/history', permanent: true }];
    }
};

export default nextConfig;
