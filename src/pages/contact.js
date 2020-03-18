import React from 'react'
import NoStretchImage from '../components/noStretchImage'

import style from '../styles/contact.module.scss'
import Layout from '../components/layout'
import wedgwood from '../assets/plates/wedgwood1.png'

class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { contentHeight: null }
        this.wrapperRef = React.createRef()
        this.formRef = React.createRef()

        // images
        this.top3_a = this.props.data.top3_a.childImageSharp.fluid
    }

    componentDidMount() {
        // const contentHeight = this.wrapperRef.current.clientHeight
        // const formHeight = this.formRef.current.clientHeight
        // this.setState({ photoWrapperHeight: formHeight + 'px' })
    }

    render() {
        return (
            <Layout>
                <div ref={this.wrapperRef} className={style.wrapper}>
                    <div ref={this.formRef} className={style.form}>
                        <form
                            name="contact"
                            method="POST"
                            autoComplete="off"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            {/* hidden netlify field */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />

                            <h1 className={style.title}>Let's Talk!</h1>
                            <input
                                style={{ display: 'none' }}
                                name="bot-field"
                            />
                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={style.input}
                            />
                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={style.input}
                            />
                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className={style.input}
                            />
                            {/* Message */}
                            <textarea
                                type="message"
                                name="message"
                                placeholder="Message"
                                className={style.textarea}
                            />
                            <button
                                className={`${style.button} ${style.submit}`}
                                type="submit"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div
                        style={
                            {
                                // height: `calc(100vh - 1rem - 110px - ${this.state.photoWrapperHeight})`,
                            }
                        }
                        className={style.plateWrapper}
                    >
                        <NoStretchImage
                            className={style.rotatingImage}
                            fluid={this.top3_a}
                        />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ContactPage

export const query = graphql`
    query {
        top3_a: file(relativePath: { eq: "plates/wedgwood1.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        coolHunting: file(relativePath: { eq: "press/coolHunting.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        PD: file(relativePath: { eq: "press/PD.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        DM: file(relativePath: { eq: "press/DM.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        culaizuv: file(relativePath: { eq: "press/culaizuv.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        portfolio: file(relativePath: { eq: "press/portfolio.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`
