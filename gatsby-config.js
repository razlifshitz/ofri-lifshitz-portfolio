module.exports = {
    siteMetadata: {
        title: '',
        author: '',
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
        'gatsby-plugin-react-helmet',
    ],
}
