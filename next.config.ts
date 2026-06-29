import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/resume/file": ["./private/**/*"],
  },
};

export default nextConfig;
