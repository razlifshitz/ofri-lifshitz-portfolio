import React from 'react'

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
                Hi! I’m Ofri, Israeli designer,<br></br>specializes in digital
                craft, conceptual design and manufacturing methods. Creating
                industrial-one of a kind pieces.
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
