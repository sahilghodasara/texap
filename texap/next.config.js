const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}

module.exports = {
    i18n: {
      locales: ['en-US', 'ar'],
      defaultLocale: 'en-US',
    },
  }