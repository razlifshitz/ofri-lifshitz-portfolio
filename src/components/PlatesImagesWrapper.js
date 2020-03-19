// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'

// class PlatesImagesWrapper extends React.Component {
//     constructor(props) {
//         super(props)

//         // images
//         const top_1 = this.props.data.top_1.childImageSharp.fluid
//         const top_1b = this.props.data.top_1b.childImageSharp.fluid
//         const top_2 = this.props.data.top_2.childImageSharp.fluid
//         const top_3 = this.props.data.top_3.childImageSharp.fluid
//         const top_3a = this.props.data.top_3a.childImageSharp.fluid
//         const top_3b = this.props.data.top_3b.childImageSharp.fluid
//         const top_3c = this.props.data.top_3c.childImageSharp.fluid

//         const images = [
//             { src: top_1 },
//             { src: top_1b },
//             { src: top_2 },
//             { src: top_3 },
//             { src: top_3a },
//             { src: top_3b },
//             { src: top_3c },
//         ]

//         this.state = {
//             images: images,
//         }
//     }
// }

// export default props => (
//     <StaticQuery
//         query={graphql`
//             query {
//                 top_1: file(relativePath: { eq: "plates/top_1.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_1b: file(relativePath: { eq: "plates/top_1b.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_2: file(relativePath: { eq: "plates/top_2.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_3: file(relativePath: { eq: "plates/top_3.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_3a: file(relativePath: { eq: "plates/top_3a.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_3b: file(relativePath: { eq: "plates/top_3b.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//                 top_3c: file(relativePath: { eq: "plates/top_3c.png" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 250) {
//                             ...GatsbyImageSharpFluid_noBase64
//                         }
//                     }
//                 }
//             }
//         `}
//         render={data => <RotatingPlateDialog data={data} {...props} />}
//     />
// )
