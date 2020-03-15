import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/home.module.scss'
import Layout from '../components/layout'
// import NoStretchImage from '../components/noStretchImage'
import Carousel from '../components/carousel'

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        //const invitation = data.invitation.childImageSharp.fluid
        this.textRef = React.createRef()
    }

    onColorChange = color => {
        if (this.textRef.current) {
            this.textRef.current.style.color = color
        }
    }

    render() {
        return (
            <Layout>
                {/* <NoStretchImage fluid={invitation} /> */}
                <p className={style.homeDescription}>
                    Hi! I'm Ofri, an Israeli designer and creator of{' '}
                    <Link
                        to="/one-of"
                        ref={this.textRef}
                        style={{ transition: '2s' }}
                        className={style.greyLink}
                    >
                        industrial one-of
                    </Link>{' '}
                    a kind pieces. I specialize in digital craft, conceptual
                    design along with manufacturing methods.
                </p>
                <Carousel onColorChange={this.onColorChange}></Carousel>
            </Layout>
        )
    }
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
