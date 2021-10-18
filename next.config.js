module.exports = {
  reactStrictMode: true,
  images:{
    domains:["i.ibb.co"]
  },
  serverRuntimeConfig: {
      PROJECT_ROOT: process.cwd()
  },
  experimental: { nftTracing: true }
}
