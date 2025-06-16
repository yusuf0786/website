/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yusssuf-website.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // additionalSitemaps: [
    //   'https://yusssuf-website.vercel.app/server-sitemap.xml', // Optional
    // ],
  },
    images: [
        {
            loc: 'https://yusssuf-website.vercel.app/portfolio-banner.jpg',
            title: 'Yusuf Ansari',
        },
    ],
};
