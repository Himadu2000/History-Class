if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function (key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
module.exports = {
  siteMetadata: {
    title: `History Class`,
    description: `Sri Lankan History To Learn.`,
    author: `@gatsbyjs`,
    siteUrl: `https://historyclass.lk/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `History Class`,
        short_name: `history-class`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAB8Rwhx-uhynXmlTXd6zpd-v6XapG3oJM",
          authDomain: "history-class.firebaseapp.com",
          databaseURL: "https://history-class.firebaseio.com",
          projectId: "history-class",
          storageBucket: "history-class.appspot.com",
          messagingSenderId: "916508431659",
          appId: "1:916508431659:web:6d75d992e3e9b87c74e16e",
          measurementId: "G-0Y4RWLYNX7",
        },
        loginPath: "/user/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },

    // flamelink
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          projectId: "history-class",
          clientEmail:
            "firebase-adminsdk-dvqse@history-class.iam.gserviceaccount.com",
          privateKey: privateKey,
          databaseURL: "https://history-class.firebaseio.com",
          storageBucket: "history-class.appspot.com",
        },
        dbType: "cf",
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: false,
      },
    },
  ],
}
