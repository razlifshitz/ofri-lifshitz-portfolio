import React from 'react'
import NoStretchImage from '../components/noStretchImage'
import { Link } from 'gatsby'

import style from '../styles/contact.module.scss'
import Layout from '../components/layout'
import wedgwood from '../assets/plates/wedgwood1.png'

class ContactPage extends React.Component {
    constructor(props) {
        super(props)

        // images
        this.top3_a = this.props.data.top3_a.childImageSharp.fluid
    }

    componentDidMount() {}

    render() {
        return (
            <Layout>
                <div className={style.wrapper}>
                    <div className={style.form}>
                        <h1 className={style.title}>Thank you!</h1>
                        <div className={style.successMessage}>
                            <h4 style={{ marginBottom: '2rem' }}>
                                I have received your message! Will get back to
                                you shortly :)
                            </h4>
                            <Link className={style.button} to="/">
                                Back Home
                            </Link>
                        </div>
                    </div>
                    <div className={style.plateWrapper}>
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
