import { useStaticQuery } from 'gatsby'

export const useCarouselImages = () => {
    const data = useStaticQuery(graphql`
        query {
            invitation: file(
                relativePath: { eq: "Industrial one of 3.0 invitation.jpg" }
            ) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image1: file(relativePath: { eq: "carousel/1.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image2: file(relativePath: { eq: "carousel/2.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image3: file(relativePath: { eq: "carousel/3.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image4: file(relativePath: { eq: "carousel/4.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image5: file(relativePath: { eq: "carousel/5.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image6: file(relativePath: { eq: "carousel/6.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            image7: file(relativePath: { eq: "carousel/7.jpg" }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)

    const images = [
        {
            ...data.image2.childImageSharp,
            src: data.image2.childImageSharp.fluid,
            dominantColor: '#4BA1CC',
        },
        {
            ...data.image1.childImageSharp,
            src: data.image1.childImageSharp.fluid,
            dominantColor: '#A09590',
        },
        {
            ...data.image3.childImageSharp,
            src: data.image3.childImageSharp.fluid,
            dominantColor: '#F7855B',
        },
        {
            ...data.image4.childImageSharp,
            src: data.image4.childImageSharp.fluid,
            dominantColor: '#B79679',
        },
        {
            ...data.image7.childImageSharp,
            src: data.image7.childImageSharp.fluid,
            dominantColor: '#4BA1CC',
        },
        {
            ...data.image5.childImageSharp,
            src: data.image5.childImageSharp.fluid,
            dominantColor: '#A19FA8',
        },
        {
            ...data.image6.childImageSharp,
            src: data.image6.childImageSharp.fluid,
            dominantColor: '#0818A8',
        },
    ]

    return images
}
