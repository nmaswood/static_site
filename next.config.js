const isProd = process.env.CI !== undefined;

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://s3.us-west-2.amazonaws.com/nasrmaswood.com' : '',
}
