import mdx from "@next/mdx";

const isWorkerBuild = process.env.NEXT_DEPLOY_TARGET === "worker";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  output: isWorkerBuild ? "standalone" : "export",
  outputFileTracingRoot: process.cwd(),
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
