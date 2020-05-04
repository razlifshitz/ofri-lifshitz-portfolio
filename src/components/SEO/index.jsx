import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, pathname, article }) => {
    const data = useStaticQuery(graphql`
        query SEO {
            site {
                siteMetadata {
                    defaultTitle: title
                    titleTemplate
                    defaultDescription: description
                    siteUrl: url
                    defaultImage: image
                }
            }
        }
    `)

    const {
        site: {
            siteMetadata: {
                defaultTitle,
                titleTemplate,
                defaultDescription,
                siteUrl,
                defaultImage,
            },
        },
    } = data

    const seo = {
        title: title || defaultTitle,
        fullTitle: title ? title + ' | ' + defaultTitle : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
    }
    seo.titleTemplate = seo.title === defaultTitle ? '' : titleTemplate

    return (
        <>
            <Helmet title={seo.fullTitle}>
                {/* <meta name="description" content={seo.description} /> */}
                <meta name="image" content={seo.image} />
                {seo.url && <meta property="og:url" content={seo.url} />}
                {article && <meta property="og:type" content="article" />}
                {seo.fullTitle && (
                    <meta property="og:title" content={seo.fullTitle} />
                )}
                {/* {seo.description && (
                    <meta property="og:description" content={seo.description} />
                )} */}
                {seo.image && <meta property="og:image" content={seo.image} />}

                {/* twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                {seo.fullTitle && (
                    <meta name="twitter:title" content={seo.fullTitle} />
                )}
                {/* {seo.description && (
                    <meta
                        name="twitter:description"
                        content={seo.description}
                    />
                )} */}
                {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
        </>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
}
