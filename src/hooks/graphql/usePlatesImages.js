import { useStaticQuery } from 'gatsby'

export const usePlatesImages = () => {
    const data = useStaticQuery(graphql`
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
            top_all_4: file(relativePath: { eq: "plates/top_all_4.png" }) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)

    const images = [
        { src: data.top_1.childImageSharp.fluid },
        { src: data.top_1b.childImageSharp.fluid },
        { src: data.top_2.childImageSharp.fluid },
        { src: data.top_3.childImageSharp.fluid },
        { src: data.top_3a.childImageSharp.fluid },
        { src: data.top_3b.childImageSharp.fluid },
        { src: data.top_3c.childImageSharp.fluid },
        { src: data.top_all_4.childImageSharp.fluid },
    ]

    return images
}
