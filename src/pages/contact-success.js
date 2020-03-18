import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/contact.module.scss'
import Layout from '../components/layout'
import Carousel from '../components/carousel'
import { contactMobileDisplay } from '../constants/one-of.constants'

class ContactPage extends React.Component {
    constructor(props) {
        super(props)

        // images
        const top_1 = this.props.data.top_1.childImageSharp.fluid
        const top_1b = this.props.data.top_1b.childImageSharp.fluid
        const top_2 = this.props.data.top_2.childImageSharp.fluid
        const top_3 = this.props.data.top_3.childImageSharp.fluid
        const top_3a = this.props.data.top_3a.childImageSharp.fluid
        const top_3b = this.props.data.top_3b.childImageSharp.fluid
        const top_3c = this.props.data.top_3c.childImageSharp.fluid

        const images = [
            { src: top_1 },
            { src: top_1b },
            { src: top_2 },
            { src: top_3 },
            { src: top_3a },
            { src: top_3b },
            { src: top_3c },
        ]

        this.state = {
            activeIndex: this.getRandIndex(images.length),
            images: images,
            isMobileView: null,
        }
    }

    setIsMobileView = () => {
        const result = window.matchMedia(`(max-width: ${contactMobileDisplay}`)
        this.setState({ ...this.state, isMobileView: result.matches })
    }

    componentDidMount() {
        this.setIsMobileView()
        window.addEventListener('resize', this.setIsMobileView)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setIsMobileView)
    }

    getRandIndex = limit => {
        return Math.floor(Math.random() * Math.floor(limit))
    }

    getImageJsx = () => {
        return (
            <div className={style.plateWrapper}>
                <Carousel
                    activeIndex={this.state.activeIndex}
                    images={this.state.images}
                    wrapperClass={style.rotatingImage}
                    random="true"
                ></Carousel>
            </div>
        )
    }

    render() {
        return (
            <Layout>
                <div ref={this.wrapperRef} className={style.wrapper}>
                    <div ref={this.formRef} className={style.form}>
                        <h1 className={style.title}>Thank you!</h1>

                        {this.state.isMobileView ? this.getImageJsx() : null}

                        <div className={style.successMessage}>
                            <h4 style={{ marginBottom: '2rem' }}>
                                I have received your message!<br></br>Will get
                                back to you shortly :)
                            </h4>
                            <Link className={style.button} to="/">
                                ← Back Home
                            </Link>
                        </div>
                    </div>
                    {!this.state.isMobileView ? this.getImageJsx() : null}
                </div>
            </Layout>
        )
    }
}

export default ContactPage

export const query = graphql`
    query {
        top_1: file(relativePath: { eq: "plates/top_1.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_1b: file(relativePath: { eq: "plates/top_1b.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_2: file(relativePath: { eq: "plates/top_2.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_3: file(relativePath: { eq: "plates/top_3.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_3a: file(relativePath: { eq: "plates/top_3a.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_3b: file(relativePath: { eq: "plates/top_3b.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        top_3c: file(relativePath: { eq: "plates/top_3c.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`
