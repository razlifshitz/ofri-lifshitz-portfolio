import React from 'react'

import Layout from '../components/layout'
import NoStretchImage from '../components/noStretchImage'

const IndexPage = ({ data }) => {
    const invitation = data.invitation.childImageSharp.fluid

    return (
        <Layout>
            <NoStretchImage fluid={invitation} />
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
        invitation: file(
            relativePath: { eq: "Industrial one of 3.0 invitation.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
