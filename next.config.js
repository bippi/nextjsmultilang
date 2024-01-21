/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {
  export: "standalone",
};

module.exports = withNextIntl(nextConfig);
