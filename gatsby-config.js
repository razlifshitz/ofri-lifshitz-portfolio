module.exports = {
    siteMetadata: {
        title: 'Ofri Lifshitz Design',
        titleTemplate: '%s | Ofri Lifshitz Design',
        description: '',
        url: 'https://www.ofri.netlify.app',
        author: '',
        image: '/icons/wedgwood-icon-512x512.jpg',
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ofri Lifshitz Design`,
                short_name: `Ofri Lifshitz`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `minimal-ui`,
                icon: `src/assets/logos/ol-logo-transparent-51x512.png`, // This path is relative to the root of the site.
                cache_busting_mode: 'none',
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*'],
                },
            },
        },
    ],
}
