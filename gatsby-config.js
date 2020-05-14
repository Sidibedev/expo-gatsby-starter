module.exports = {
  plugins: [
    `gatsby-plugin-react-native-web`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Expo-Gatsby-Starter`,
        short_name: `ExpoGatsby`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#cccccc`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
