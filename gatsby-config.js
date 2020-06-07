module.exports = {
  siteMetadata: {
    title: `Freelance Web Developer and Designer`,
    description: `Michael Mikucki freelance web developer and designer, building high quality websites and web applications. London freelance web developer and designer able to work remotely with clients from all around the UK and rest of the World. Headles CMS and SEO optimised.`,
    author: 'mikem.io - Michael Mikucki',
    url: 'https://mikem.io',
    siteUrl: 'https://mikem.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Freelance web developer and designer`,
        short_name: `mikem.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff7500`,
        display: `standalone`,
        icon: `src/images/mm-logo-dark.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-160411272-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '200817241230030',
      },
    },
  ],
}
