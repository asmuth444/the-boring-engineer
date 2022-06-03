/** @type {import('next').NextConfig} */
const path = require("path");
const withTM = require('next-transpile-modules')([
    'three'
]);
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  withTM,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer:  /\.(js|ts)x?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}

module.exports = nextConfig
