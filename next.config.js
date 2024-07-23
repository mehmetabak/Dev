const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  i18n: {
    localeDetection: false, 
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'i.imgur.com',
      'istockphoto.com',
      'cdn1.iconfinder.com',
      'media.licdn.com'
    ],
  },
});
