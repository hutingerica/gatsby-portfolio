module.exports = {
  siteMetadata: {
    title: `Erica Huang`,
    name: `Erica Huang`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Hi there! Here're my selected projects`,
      subtitle: `Currently, I'm building a platform for cooking co-creation and improving web experience at & Beyond Flavour. In my free time, I share my love for design and programming in a visual way, and playing with React and Headless CMS.`,
      maxWidth: 750,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/hutingerica`,
      },

      {
        name: `linkedin`,
        url: `https://www.linkedin.com/ericaypp`,
      },
      
      {
        name: `notion`,
        url: `https://www.notion.com/`,
      },

      {
        name: `instagram`,
        url: `https://instagram.com/ericaypp`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true, // make sure this is true!
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://yourDomainHere.us18.list-manage.com/subscribe/post?u=1512315231251&amp;id=0asd21t12e', // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
