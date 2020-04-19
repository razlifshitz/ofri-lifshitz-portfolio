import { useStaticQuery } from 'gatsby'

export const usePlatesImages = () => {
    const data = useStaticQuery(graphql`
        query {
            top_1: file(relativePath: { eq: "plates/top_1.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_1b: file(relativePath: { eq: "plates/top_1b.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_2: file(relativePath: { eq: "plates/top_2.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_3: file(relativePath: { eq: "plates/top_3.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_3a: file(relativePath: { eq: "plates/top_3a.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_3b: file(relativePath: { eq: "plates/top_3b.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_3c: file(relativePath: { eq: "plates/top_3c.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            top_all_4: file(relativePath: { eq: "plates/top_all_4.png" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)

    const images = [
        { id: data.top_1.id, src: data.top_1.childImageSharp.fluid },
        { id: data.top_1b.id, src: data.top_1b.childImageSharp.fluid },
        { id: data.top_2.id, src: data.top_2.childImageSharp.fluid },
        { id: data.top_3.id, src: data.top_3.childImageSharp.fluid },
        { id: data.top_3a.id, src: data.top_3a.childImageSharp.fluid },
        { id: data.top_3b.id, src: data.top_3b.childImageSharp.fluid },
        { id: data.top_3c.id, src: data.top_3c.childImageSharp.fluid },
        { id: data.top_all_4.id, src: data.top_all_4.childImageSharp.fluid },
    ]

    return images
}
