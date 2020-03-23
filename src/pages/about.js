import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/about.module.scss'

import Layout from '../components/layout'
import NoStretchImage from '../components/noStretchImage'

const education = [
    '2013-2017 / B. Design, HIT (Holon Institute of Technology) - graduated with honor',
    '2015 / Design Academy Eindhoven, Holland - exchange semester',
]

const awardsAndExhibitions = [
    '2020 / Industrial One Of 3.0 - Solo Exhibition - Jerusalem Artists’ House',
    '2018 / Award for art & design from AICF - America-Israel cultural foundation',
    '2018 / "Pro Jerusalem" - Jerusalem Design week - Hansen House Jerusalem',
    '2018 / "Shibush" Exhibition - "Vitrina" gallery Holon',
    '2017 / "Designing Technology" Exhibition - Expo Tel Aviv',
    '2017 / Design Department Dean’s first prize in excellence for Graduation Project',
]

const AboutPage = ({ data, location }) => {
    const ofriImage = data.ofriImage.childImageSharp.fluid

    return (
        <Layout activeItem={location.state && location.state.activeItem}>
            <NoStretchImage
                fluid={ofriImage}
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '12rem',
                    borderRadius: '50%',
                    marginBottom: '1.45rem',
                    // position: 'absolute', // web view..?
                    // top: '5rem',
                    // left: '8rem',
                }}
            />
            <p>
                Ofri is an Israeli designer (b. 1990) who graduated with honors
                from H.I.T, Holon Institute of Technology, Industrial design
                department (2017). Though she specializes in digital craft,
                conceptual design along with manufacturing methods, she is also
                passionate about material research, innovations and technology.
            </p>
            <p>
                As a designer, she is interested in the interface between craft
                and technology, and most of her body of work incorporates both
                worlds. She is driven by the process - the ideating process,
                developing process, and manufacturing process. Having often been
                drawn to objects that tell their own manufacturing story, it’s
                therefore no coincidence that her current main project,{' '}
                <Link to="/one-of" className={style.greyLink}>
                    Industrial one-of
                </Link>
                , is one that centers on observing and also interfering with
                manufacturing processes and methods.
            </p>
            <p>
                She hopes to always challenge herself and approach a creative
                design from an interdisciplinary standpoint. While doing so, she
                aims to collaborate with individuals and companies that also
                want to offer an alternative to industrial production, apart
                from the visual, cultural and consumer homogeneity that is the
                basis of global industrial production today.
            </p>
            <FieldPresentation
                name="Education"
                data={education}
            ></FieldPresentation>
            <FieldPresentation
                name="Awards and Exhibitions"
                data={awardsAndExhibitions}
            ></FieldPresentation>
        </Layout>
    )
}

const FieldPresentation = props => {
    return (
        <p>
            <h3>{props.name}</h3>
            {props.data.map(text => (
                <p>{text}</p>
            ))}
        </p>
    )
}

export default AboutPage

export const query = graphql`
    query {
        ofriImage: file(relativePath: { eq: "ofri5.jpg" }) {
            childImageSharp {
                fluid(grayscale: true, maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
