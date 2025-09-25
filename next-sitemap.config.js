/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://visuticareer.com', // Replace with your actual domain
  generateRobotsTxt: true,           // Generate robots.txt
  sitemapSize: 5000,                  // Optional: split sitemap if you have many URLs
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'], // Pages to exclude
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all pages
    ],
  },
};
