import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import style from '../styles/carousel.module.scss'
import NoStretchImage from './noStretchImage'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        const data = this.props.data

        const image1 = data.image1.childImageSharp.fluid
        const image2 = data.image2.childImageSharp.fluid
        const image3 = data.image3.childImageSharp.fluid
        const image4 = data.image4.childImageSharp.fluid
        const image5 = data.image5.childImageSharp.fluid
        const image6 = data.image6.childImageSharp.fluid
        const image7 = data.image7.childImageSharp.fluid

        this.state = {
            activeIndex: 0,
            images: [
                { src: image2, dominantColor: '#4BA1CC' },
                { src: image1, dominantColor: '#A09590' },
                { src: image3, dominantColor: '#F7855B' },
                { src: image4, dominantColor: '#B79679' },
                { src: image7, dominantColor: '#4BA1CC' },
                { src: image5, dominantColor: '#A19FA8' },
                { src: image6, dominantColor: '#0818A8' },
            ],
        }

        this.intervalKey = setInterval(this.next, 4000)
    }

    componentDidMount() {
        this.onImageChange(this.state.activeIndex)
    }

    componentWillUnmount() {
        clearInterval(this.intervalKey)
    }

    next = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === this.state.images.length - 1 ? 0 : activeIndex + 1

        this.setState({ ...this.state, activeIndex: newIndex })

        this.onImageChange(newIndex)
    }

    previous = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === 0 ? this.state.images.length - 1 : activeIndex - 1

        this.setState({ ...this.state, activeIndex: newIndex })

        this.onImageChange(newIndex)
    }

    /**
     * Updating dominant color
     */
    onImageChange = newIndex => {
        this.props.onImageChange(this.state.images[newIndex].dominantColor)
    }

    /**
     * Getting Image JSX
     */
    getImageJsx = (image, index) => {
        return index === this.state.activeIndex ? (
            <div
                key={index}
                style={{ display: 'block' }}
                className={style.mySlides + ' ' + style.fade}
            >
                <NoStretchImage
                    fluid={image.src}
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
                    loading="eager"
                ></NoStretchImage>
            </div>
        )
    }

    render() {
        return (
            <div className={style.slideshowContainer}>
                {this.state.images.map((image, index) =>
                    this.getImageJsx(image, index)
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
        `}
        render={data => <Carousel data={data} {...props} />}
    />
)
