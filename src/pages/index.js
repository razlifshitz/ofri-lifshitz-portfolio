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

        const data = this.props.data

        const image1 = data.image1.childImageSharp.fluid
        const image2 = data.image2.childImageSharp.fluid
        const image3 = data.image3.childImageSharp.fluid
        const image4 = data.image4.childImageSharp.fluid
        const image5 = data.image5.childImageSharp.fluid
        const image6 = data.image6.childImageSharp.fluid
        const image7 = data.image7.childImageSharp.fluid

        this.carouselImages = [
            { src: image2, dominantColor: '#4BA1CC' },
            { src: image1, dominantColor: '#A09590' },
            { src: image3, dominantColor: '#F7855B' },
            { src: image4, dominantColor: '#B79679' },
            { src: image7, dominantColor: '#4BA1CC' },
            { src: image5, dominantColor: '#A19FA8' },
            { src: image6, dominantColor: '#0818A8' },
        ]

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
                <div className={style.container}>
                    <p className={style.homeDescription}>
                        Hi! I'm Ofri, an Israeli designer and creator of{' '}
                        <Link
                            to="/one-of"
                            ref={this.textRef}
                            style={{ transition: '2s', color: '#4BA1CC' }}
                            className={style.greyLink}
                        >
                            industrial one-of
                        </Link>{' '}
                        a kind pieces. I specialize in digital craft, conceptual
                        design along with manufacturing methods.
                    </p>
                    <Carousel
                        images={this.carouselImages}
                        interval="4000"
                        onImageChange={this.onColorChange}
                    ></Carousel>
                </div>
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
        image1: file(relativePath: { eq: "carousel/1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image2: file(relativePath: { eq: "carousel/2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image3: file(relativePath: { eq: "carousel/3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image4: file(relativePath: { eq: "carousel/4.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image5: file(relativePath: { eq: "carousel/5.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image6: file(relativePath: { eq: "carousel/6.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        image7: file(relativePath: { eq: "carousel/7.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`
