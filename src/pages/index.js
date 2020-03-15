import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/home.module.scss'
import Layout from '../components/layout'
// import NoStretchImage from '../components/noStretchImage'
import Carousel from '../components/carousel'

const IndexPage = ({ data }) => {
    const invitation = data.invitation.childImageSharp.fluid

    return (
        <Layout>
            {/* <NoStretchImage fluid={invitation} /> */}
            <h3 className={style.homeDescription}>
                Hi! I'm Ofri, an Israeli designer and creator of{' '}
                <Link to="/one-of" style={{ color: 'inherit' }}>
                    <i>industrial one-of</i>
                </Link>{' '}
                a kind pieces. I specialize in digital craft, conceptual design
                along with manufacturing methods.
            </h3>
            <Carousel></Carousel>
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
