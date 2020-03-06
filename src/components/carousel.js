import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import style from '../styles/carousel.module.scss'
import NoStretchImage from './noStretchImage'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        const data = this.props.data

        // v1.0
        // const v1_0_dark = data.v1_0_dark.childImageSharp.fluid
        // const v1_0_white = data.v1_0_white.childImageSharp.fluid
        const image3 = data.image3.childImageSharp.fluid
        // const image4 = data.image4.childImageSharp.fluid

        // const image11 = data.image11.childImageSharp.fluid
        const image8 = data.image8.childImageSharp.fluid
        const image7 = data.image7.childImageSharp.fluid

        // v2.0
        const v2_0_1 = data.v2_0_1.childImageSharp.fluid
        // const v2_0_2 = data.v2_0_2.childImageSharp.fluid
        const v2_0_3 = data.v2_0_3.childImageSharp.fluid

        // // v3.0
        const v3_0_1 = data.v3_0_1.childImageSharp.fluid
        const v3_0_2 = data.v3_0_2.childImageSharp.fluid
        const v3_0_3 = data.v3_0_3.childImageSharp.fluid
        const v3_0_4 = data.v3_0_4.childImageSharp.fluid
        // v3_0_5 = this.data.v3_0_5.childImageSharp.fluid
        // v3_0_6 = this.data.v3_0_6.childImageSharp.fluid
        // v3_0_7 = this.data.v3_0_7.childImageSharp.fluid
        // v3_0_8 = this.data.v3_0_8.childImageSharp.fluid
        // v3_0_9 = this.data.v3_0_9.childImageSharp.fluid
        // v3_0_10 = this.data.v3_0_10.childImageSharp.fluid
        // v3_0_11 = this.data.v3_0_11.childImageSharp.fluid
        // v3_0_12 = this.data.v3_0_12.childImageSharp.fluid

        this.state = {
            activeIndex: 0,
            images: [image3, v2_0_1, image7, image8, v2_0_3],
        }

        setInterval(this.next, 4000)
    }

    componentDidMount() {}

    next = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === this.state.images.length - 1 ? 0 : activeIndex + 1

        this.setState({ ...this.state, activeIndex: newIndex })
    }

    previous = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === 0 ? this.state.images.length - 1 : activeIndex - 1

        this.setState({ ...this.state, activeIndex: newIndex })
    }

    render() {
        return (
            <div className={style.slideshowContainer}>
                {this.state.images.map((image, index) =>
                    index === this.state.activeIndex ? (
                        <div
                            key={index}
                            style={{ display: 'block' }}
                            className={style.mySlides + ' ' + style.fade}
                        >
                            <NoStretchImage
                                fluid={image}
                                imgStyle={{ width: '100%' }}
                            ></NoStretchImage>
                        </div>
                    ) : (
                        <div
                            key={index}
                            style={{ display: 'none' }}
                            className={style.mySlides + ' ' + style.fade}
                        >
                            <NoStretchImage
                                fluid={image.src}
                                imgStyle={{ width: '100%' }}
                            ></NoStretchImage>
                        </div>
                    )
                )}
                {/* <button onClick={this.next}>Next</button>
                <button onClick={this.previous}>Previous</button> */}
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                machine: file(relativePath: { eq: "one-of/oneof (1).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v1_0_white: file(
                    relativePath: { eq: "one-of/v1.0/v1.0 (2).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v1_0_dark: file(
                    relativePath: { eq: "one-of/v1.0/v1.0 (10).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                image3: file(relativePath: { eq: "one-of/v1.0/v1.0 (3).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                image4: file(relativePath: { eq: "one-of/v1.0/v1.0 (4).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                image11: file(
                    relativePath: { eq: "one-of/v1.0/v1.0 (11).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                image8: file(relativePath: { eq: "one-of/v1.0/v1.0 (8).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                image7: file(relativePath: { eq: "one-of/v1.0/v1.0 (7).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v2_0_1: file(
                    relativePath: { eq: "one-of/v2.0/SHIBUSH 3.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v2_0_2: file(
                    relativePath: { eq: "one-of/v2.0/SHIBUSH 1.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v2_0_3: file(
                    relativePath: { eq: "one-of/v2.0/SHIBUSH 2.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_1: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (13).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_2: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (12).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_3: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (11).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_4: file(relativePath: { eq: "one-of/v3.0/v3.0 (9).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_5: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (10).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_6: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (14).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_7: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (15).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_8: file(relativePath: { eq: "one-of/v3.0/v3.0 (3).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_9: file(relativePath: { eq: "one-of/v3.0/v3.0 (4).jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_10: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (8).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_11: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (5).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                v3_0_12: file(
                    relativePath: { eq: "one-of/v3.0/v3.0 (7).jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
            }
        `}
        render={data => <Carousel data={data} {...props} />}
    />
)
