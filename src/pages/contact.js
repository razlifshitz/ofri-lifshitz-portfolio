import React from 'react'

import style from '../styles/contact.module.scss'
import Layout from '../components/layout'
import RotatingPlateDialog from '../components/RotatingPlateDialog'

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
        }
    }

    getRandIndex = limit => {
        let result = Math.floor(Math.random() * Math.floor(limit))

        if (this.state) {
            while (result === this.state.activeIndex) {
                result = Math.floor(Math.random() * Math.floor(limit))
            }
        }

        return result
    }

    onFieldFocus = () => {
        this.setState({
            ...this.state,
            activeIndex: this.getRandIndex(this.state.images.length),
        })
    }

    render() {
        return (
            <Layout>
                <RotatingPlateDialog
                    title="Let's Talk!"
                    images={this.state.images}
                    activeIndex={this.state.activeIndex}
                >
                    <form
                        name="contact"
                        method="POST"
                        action="/contact-success/"
                        autoComplete="off"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        {/* hidden netlify field */}
                        <input type="hidden" name="form-name" value="contact" />
                        <input style={{ display: 'none' }} name="bot-field" />

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Message */}
                        <textarea
                            type="message"
                            name="message"
                            placeholder="Message"
                            className={style.textarea}
                            onFocus={this.onFieldFocus}
                            required
                            minLength="10"
                        />
                        <button
                            className={`${style.button} ${style.submit}`}
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </RotatingPlateDialog>
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
