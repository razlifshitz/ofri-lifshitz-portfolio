import React from 'react'

import Layout from '../components/layout'
import NoStretchImage from '../components/noStretchImage'

const education = [
    '2013-2017 / B. Design, HIT (Holon Institute of Technology) - graduated with honor',
    '2015 / Design Academy Eindhoven, Holland - exchange semester',
]

const awardsAndExhibitions = [
    '2020 / Industrial One Of 3.0 - Solo exhibition- Jerusalem Artists’ House',
    '2018 / Award for art & design from AICF - America-Israel cultural foundation',
    '2018 / "Pro Jerusalem" - Jerusalem Design week - Hansen House Jerusalem',
    '2018 / "Shibush" Exhibition - "Vitrina" gallery Holon',
    '2017 / "Designing Technology" Exhibition - Expo Tel Aviv',
    '2017 / Design Department Dean’s first prize in excellence for Graduation Project',
]

const AboutPage = ({ data }) => {
    const ofriImage = data.ofriImage.childImageSharp.fluid

    return (
        <Layout>
            <NoStretchImage
                fluid={ofriImage}
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '80%',
                    marginBottom: '1.45rem',
                }}
            />
            <p>
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout, and printing in place of English to
                emphasise design elements over content. It's also called
                placeholder (or filler) text. It's a convenient tool for
                mock-ups. It helps to outline the visual elements of a document
                or presentation, eg typography, font, or layout. Lorem ipsum is
                mostly a part of a Latin text by the classical author and
                philosopher Cicero.
            </p>
            <p>
                Its words and letters have been changed by addition or removal,
                so to deliberately render its content nonsensical; it's not
                genuine, correct, or comprehensible Latin anymore. While lorem
                ipsum's still resembles classical Latin, it actually has no
                meaning whatsoever. As Cicero's text doesn't contain the letters
                K, W, or Z, alien to latin, these, and others are often inserted
                randomly to mimic the typographic appearence of European
                languages, as are digraphs not to be found in the original.
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
        ofriImage: file(relativePath: { eq: "ofri1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
