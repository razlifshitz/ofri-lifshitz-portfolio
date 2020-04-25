module.exports = {
    siteMetadata: {
        title: 'Ofri Lifshitz Design',
        titleTemplate: '%s | Ofri Lifshitz Design',
        description: '',
        url: 'https://www.ofri.netlify.app',
        author: '',
        image: '',
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
