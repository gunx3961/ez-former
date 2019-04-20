const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
  // extra configuration for github pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ez-former' : '',
});
