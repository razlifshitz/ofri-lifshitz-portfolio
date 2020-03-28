// TODO: use SCSS style variable when possible
// export const mediaWidth = '1180px'
// export const contactMobileDisplay = '830px'

// actions
export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'

// funcitons
export const getRandIndex = limit => {
    return Math.floor(Math.random() * Math.floor(limit))
}

// data

// menu
const INDUSTRIAL_ONE_OF = {
    id: 'INDUSTRIAL_ONE_OF',
    name: 'The Story Behind',
    slug: '/one-of',
    parentId: 'INDUSTRIAL_ONE_OF',
}
const INDUSTRIAL_ONE_OF_1_0 = {
    id: 'INDUSTRIAL_ONE_OF_1_0',
    name: 'v1.0',
    slug: '/one-of#ioo_1_0',
    parentId: 'INDUSTRIAL_ONE_OF',
}
const INDUSTRIAL_ONE_OF_2_0 = {
    id: 'INDUSTRIAL_ONE_OF_2_0',
    name: 'v2.0',
    slug: '/one-of#ioo_2_0',
    parentId: 'INDUSTRIAL_ONE_OF',
}
const INDUSTRIAL_ONE_OF_3_0 = {
    id: 'INDUSTRIAL_ONE_OF_3_0',
    name: 'v3.0',
    slug: '/one-of#ioo_3_0',
    parentId: 'INDUSTRIAL_ONE_OF',
}
const INDUSTRIAL_ONE_OF_1_0_SPECIAL = {
    id: 'INDUSTRIAL_ONE_OF_1_0_SPECIAL',
    name: 'vJeru.002',
    slug: '/one-of#ioo_1_0_special',
    parentId: 'INDUSTRIAL_ONE_OF',
}

export const ABOUT = {
    id: 'ABOUT',
    name: 'About',
    slug: '/about',
}
export const ONE_OF = {
    id: 'INDUSTRIAL_ONE_OF',
    name: 'Industrial One Of',
    slug: '/one-of',
    children: getOneOfSubMenuList(),
}
export const PRESS = {
    id: 'PRESS',
    name: 'Press',
    slug: '/press',
}
export const CONTACT = {
    id: 'CONTACT',
    name: 'Contact',
    slug: '/contact',
}

function getOneOfSubMenuList() {
    return [
        { ...INDUSTRIAL_ONE_OF },
        { ...INDUSTRIAL_ONE_OF_1_0 },
        { ...INDUSTRIAL_ONE_OF_2_0 },
        { ...INDUSTRIAL_ONE_OF_3_0 },
        { ...INDUSTRIAL_ONE_OF_1_0_SPECIAL },
    ]
}

export const getMenuItemsList = () => {
    return [{ ...ABOUT }, { ...ONE_OF }, { ...PRESS }, { ...CONTACT }]
}
export const getOneOfSubMenu = () => {
    return {
        INDUSTRIAL_ONE_OF: { ...INDUSTRIAL_ONE_OF },
        INDUSTRIAL_ONE_OF_1_0: { ...INDUSTRIAL_ONE_OF_1_0 },
        INDUSTRIAL_ONE_OF_2_0: { ...INDUSTRIAL_ONE_OF_2_0 },
        INDUSTRIAL_ONE_OF_3_0: { ...INDUSTRIAL_ONE_OF_3_0 },
        INDUSTRIAL_ONE_OF_1_0_SPECIAL: { ...INDUSTRIAL_ONE_OF_1_0_SPECIAL },
    }
}
// scroll value
export const SCROLL_SHOW_TABLE_OF_CONTENTS = 80

// export const imageQuery = graphql`
//     query {
//         machine: file(relativePath: { eq: "one-of/oneof (1).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v1_0_dark: file(relativePath: { eq: "one-of/v1.0/v1.0 (2).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v1_0_white: file(relativePath: { eq: "one-of/v1.0/v1.0 (10).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         image3: file(relativePath: { eq: "one-of/v1.0/v1.0 (3).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         image4: file(relativePath: { eq: "one-of/v1.0/v1.0 (4).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         image11: file(relativePath: { eq: "one-of/v1.0/v1.0 (11).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         image8: file(relativePath: { eq: "one-of/v1.0/v1.0 (8).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v2_0_1: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 3.jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v2_0_2: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 1.jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v2_0_3: file(relativePath: { eq: "one-of/v2.0/SHIBUSH 2.jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_1: file(relativePath: { eq: "one-of/v3.0/v3.0 (13).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_2: file(relativePath: { eq: "one-of/v3.0/v3.0 (12).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_3: file(relativePath: { eq: "one-of/v3.0/v3.0 (11).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_4: file(relativePath: { eq: "one-of/v3.0/v3.0 (9).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_5: file(relativePath: { eq: "one-of/v3.0/v3.0 (10).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_6: file(relativePath: { eq: "one-of/v3.0/v3.0 (14).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_7: file(relativePath: { eq: "one-of/v3.0/v3.0 (15).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_8: file(relativePath: { eq: "one-of/v3.0/v3.0 (3).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_9: file(relativePath: { eq: "one-of/v3.0/v3.0 (4).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_10: file(relativePath: { eq: "one-of/v3.0/v3.0 (8).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_11: file(relativePath: { eq: "one-of/v3.0/v3.0 (5).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//         v3_0_12: file(relativePath: { eq: "one-of/v3.0/v3.0 (7).jpg" }) {
//             childImageSharp {
//                 fluid(maxWidth: 750) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `
