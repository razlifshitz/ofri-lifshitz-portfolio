import { useStaticQuery } from 'gatsby'

export const useOneOfImages = () => {
    const data = useStaticQuery(graphql`
        query {
            machine: file(relativePath: { eq: "one-of/oneof (1).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v1_0_dark: file(relativePath: { eq: "one-of/v1.0/v1.0 (2).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v1_0_white: file(
                relativePath: { eq: "one-of/v1.0/v1.0 (10).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image3: file(relativePath: { eq: "one-of/v1.0/v1.0 (3).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image4: file(relativePath: { eq: "one-of/v1.0/v1.0 (4).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image11: file(relativePath: { eq: "one-of/v1.0/v1.0 (11).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image8: file(relativePath: { eq: "one-of/v1.0/v1.0 (8).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image7: file(relativePath: { eq: "one-of/v1.0/v1.0 (7).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v2_0_1: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v2_0_2: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v2_0_3: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_1: file(relativePath: { eq: "one-of/v3.0/v3.0 (13).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_2: file(relativePath: { eq: "one-of/v3.0/v3.0 (12).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_3: file(relativePath: { eq: "one-of/v3.0/v3.0 (11).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_4: file(relativePath: { eq: "one-of/v3.0/v3.0 (9).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_5: file(relativePath: { eq: "one-of/v3.0/v3.0 (10).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_6: file(relativePath: { eq: "one-of/v3.0/v3.0 (14).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_7: file(relativePath: { eq: "one-of/v3.0/v3.0 (15).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_8: file(relativePath: { eq: "one-of/v3.0/v3.0 (3).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_9: file(relativePath: { eq: "one-of/v3.0/v3.0 (4).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_10: file(relativePath: { eq: "one-of/v3.0/v3.0 (8).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_11: file(relativePath: { eq: "one-of/v3.0/v3.0 (5).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            v3_0_12: file(relativePath: { eq: "one-of/v3.0/v3.0 (7).jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru1: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (1).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru2: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (2).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru3: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (3).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru4: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (4).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru5: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (5).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru6: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (6).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru7: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (7).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru8: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (8).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru9: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (9).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru10: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (10).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vJeru11: file(
                relativePath: { eq: "one-of/jeru/v1.0-jeru (11).jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return {
        machine: data.machine.childImageSharp.fluid,

        // v1.0
        v1_0_dark: data.v1_0_dark.childImageSharp.fluid,
        v1_0_white: data.v1_0_white.childImageSharp.fluid,
        image3: data.image3.childImageSharp.fluid,
        image4: data.image4.childImageSharp.fluid,
        image11: data.image11.childImageSharp.fluid,
        image8: data.image8.childImageSharp.fluid,
        image7: data.image7.childImageSharp.fluid,

        // v2.0
        v2_0_1: data.v2_0_1.childImageSharp.fluid,
        v2_0_2: data.v2_0_2.childImageSharp.fluid,
        v2_0_3: data.v2_0_3.childImageSharp.fluid,

        // v3.0
        v3_0_1: data.v3_0_1.childImageSharp.fluid,
        v3_0_2: data.v3_0_2.childImageSharp.fluid,
        v3_0_3: data.v3_0_3.childImageSharp.fluid,
        v3_0_4: data.v3_0_4.childImageSharp.fluid,
        v3_0_5: data.v3_0_5.childImageSharp.fluid,
        v3_0_6: data.v3_0_6.childImageSharp.fluid,
        v3_0_7: data.v3_0_7.childImageSharp.fluid,
        v3_0_8: data.v3_0_8.childImageSharp.fluid,
        v3_0_9: data.v3_0_9.childImageSharp.fluid,
        v3_0_10: data.v3_0_10.childImageSharp.fluid,
        v3_0_11: data.v3_0_11.childImageSharp.fluid,
        v3_0_12: data.v3_0_12.childImageSharp.fluid,

        // vJeru
        vJeru1: data.vJeru1.childImageSharp.fluid,
        vJeru2: data.vJeru2.childImageSharp.fluid,
        vJeru3: data.vJeru3.childImageSharp.fluid,
        vJeru4: data.vJeru4.childImageSharp.fluid,
        vJeru5: data.vJeru5.childImageSharp.fluid,
        vJeru6: data.vJeru6.childImageSharp.fluid,
        vJeru7: data.vJeru7.childImageSharp.fluid,
        vJeru8: data.vJeru8.childImageSharp.fluid,
        vJeru9: data.vJeru9.childImageSharp.fluid,
        vJeru10: data.vJeru10.childImageSharp.fluid,
        vJeru11: data.vJeru11.childImageSharp.fluid,
    }
}
