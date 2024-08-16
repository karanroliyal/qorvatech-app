/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["localhost"],
        domains: ["127.0.0.1"],
        domains: ["reassuring-fish-5cf727fbdc.strapiapp"],
        domains: ["reassuring-fish-5cf727fbdc.media.strapiapp.comhttps"],
        domains: ["reassuring-fish-5cf727fbdc.media.strapiapp.com"],
        domains: ["reassuring-fish-5cf727fbdc.media.strapiapp.comhttps"],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "reassuring-fish-5cf727fbdc.media.strapiapp.com",
            },
          ],
    },
};


export default nextConfig;
