
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'KaboomFox', // Navigation and Site Title
  siteTitleAlt: 'The personal website of Louise Fox', // Alternative Site title for SEO
  siteTitleShort: 'kaboomfox', // short_name for manifest
  siteUrl: 'https://kaboomfox.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Come check out how Louise Fox can help you level up your career as a software engineer.',
  minibio: `
    <strong>Louise Foxs</strong> is a JavaScript software engineer and
    teacher. He's taught hundreds of thousands of people how to make the world
    a better place with quality software development tools and practices. He
    lives with his wife and four kids in Utah.
  `,
  author: 'Louis Fox', // Author for schemaORGJSONLD
  organization: 'K',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kaboomfox', // Twitter Username
  ogSiteName: 'Louise Fox', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/kaboomfox/',
  twitterHandle: '@kaboomfox',
  github: 'https://github.com/kaboomfox/',
  linkedin: 'https://www.linkedin.com/in/louisefox/',
  youtube: ''
}
