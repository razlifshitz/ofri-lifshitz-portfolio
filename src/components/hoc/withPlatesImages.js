import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export const withPlatesImages = Component => {
    return class extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            //   return <WithPlatesImages {...this.props} Component={Component} />
            return (
                <StaticQuery
                    query={graphql`
                        query {
                            top_1: file(
                                relativePath: { eq: "plates/top_1.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_1b: file(
                                relativePath: { eq: "plates/top_1b.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_2: file(
                                relativePath: { eq: "plates/top_2.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_3: file(
                                relativePath: { eq: "plates/top_3.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_3a: file(
                                relativePath: { eq: "plates/top_3a.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_3b: file(
                                relativePath: { eq: "plates/top_3b.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            top_3c: file(
                                relativePath: { eq: "plates/top_3c.png" }
                            ) {
                                childImageSharp {
                                    fluid(maxWidth: 250) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (
                        <WithPlatesImages
                            data={data}
                            Component={Component}
                            {...this.props}
                        />
                    )}
                />
            )
        }
    }
}

const WithPlatesImages = props => {
    // images
    const top_1 = props.data.top_1.childImageSharp.fluid
    const top_1b = props.data.top_1b.childImageSharp.fluid
    const top_2 = props.data.top_2.childImageSharp.fluid
    const top_3 = props.data.top_3.childImageSharp.fluid
    const top_3a = props.data.top_3a.childImageSharp.fluid
    const top_3b = props.data.top_3b.childImageSharp.fluid
    const top_3c = props.data.top_3c.childImageSharp.fluid

    const Component = props.Component

    const images = [
        { src: top_1 },
        { src: top_1b },
        { src: top_2 },
        { src: top_3 },
        { src: top_3a },
        { src: top_3b },
        { src: top_3c },
    ]

    return <Component images={images} {...props}></Component>
}
