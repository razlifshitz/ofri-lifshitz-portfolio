import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// constants
import { imageWrapperStyle } from '../constants/one-of.constants'

// style
import pageStyle from '../styles/one-of.module.scss'

// components
import Layout from '../components/layout'
import NoStretchImage from '../components/noStretchImage'

// import { imageQuery } from '../constants/one-of.constants'

// images
import v2_0_gif from '../assets/one-of/v2.0/Industrial one of.gif'

class OneOfPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { contentWidth: 0 }

        this.contentWidth = React.createRef()
    }

    data = this.props.data

    machine = this.data.machine.childImageSharp.fluid

    // v1.0
    v1_0_dark = this.data.v1_0_dark.childImageSharp.fluid
    v1_0_white = this.data.v1_0_white.childImageSharp.fluid
    image3 = this.data.image3.childImageSharp.fluid
    image4 = this.data.image4.childImageSharp.fluid
    image11 = this.data.image11.childImageSharp.fluid
    image8 = this.data.image8.childImageSharp.fluid

    // v2.0
    v2_0_1 = this.data.v2_0_1.childImageSharp.fluid
    v2_0_2 = this.data.v2_0_2.childImageSharp.fluid
    v2_0_3 = this.data.v2_0_3.childImageSharp.fluid

    // v3.0
    v3_0_1 = this.data.v3_0_1.childImageSharp.fluid
    v3_0_2 = this.data.v3_0_2.childImageSharp.fluid
    v3_0_3 = this.data.v3_0_3.childImageSharp.fluid
    v3_0_4 = this.data.v3_0_4.childImageSharp.fluid
    v3_0_5 = this.data.v3_0_5.childImageSharp.fluid
    v3_0_6 = this.data.v3_0_6.childImageSharp.fluid
    v3_0_7 = this.data.v3_0_7.childImageSharp.fluid
    v3_0_8 = this.data.v3_0_8.childImageSharp.fluid
    v3_0_9 = this.data.v3_0_9.childImageSharp.fluid
    v3_0_10 = this.data.v3_0_10.childImageSharp.fluid
    v3_0_11 = this.data.v3_0_11.childImageSharp.fluid
    v3_0_12 = this.data.v3_0_12.childImageSharp.fluid

    componentDidMount() {
        const contentWidth = this.contentWidth.current.clientWidth
        this.setState({ contentWidth: contentWidth })
    }

    render() {
        return (
            <Layout>
                <div ref={this.contentWidth}>
                    <h1>Industrial One Of</h1>
                    <h3>
                        A machine that manufactures one of a kind pottery ware,
                        by leaving its unique handprint on each creation.
                    </h3>
                    <p>
                        Industrial one of is an ongoing project that examines
                        the feasibility of “one of a kind” industrial
                        manufacturing.
                    </p>
                    <p>
                        For me, the world of ceramics was fertile ground for
                        exploring this issue, since it contains the two
                        extremes: The most industrial aspects, and the craftiest
                        aspects, which exist side by side. In the world that we
                        live in today, multidimensional, cooperative and global,
                        I believe that the two worlds do not have to remain
                        separate, and that we have the tools to connect them.
                        From the craft world, I took the spirit, the values, the
                        sensations and the formal character, From the industrial
                        world, I took the methods of production, the technology,
                        and the machinery. When combined together, they create a
                        new manufacturing method that is very characteristic of
                        our time period – innovation alongside uniqueness.
                    </p>
                    <p>
                        At the center of the project stands a machine, that
                        manufactures one of a kind pottery ware. The machine is
                        a take on a traditional ceramic jigger. This adaptation
                        was made after thorough observation and analysis of the
                        industrial production of ceramic tableware.
                    </p>
                    <Img fluid={this.machine} style={imageWrapperStyle} />
                    <p>
                        Industrial one of attempts to anthropomorphize the
                        machine, so the results will seem closer to the way a
                        person would have crafted them. An artisan, even the
                        best one, is not a machine, and his movements while
                        sculpting material are never perfect. The imperfections
                        of handmade products are the main reason for their
                        desirable and rare beauty. They echo the time during
                        which the material was in the artist’s hands, a one-time
                        occurrence, in which a one of a kind shape is created
                        that can never be replicated.
                    </p>
                    <p>
                        The machine is programmed to insert its own individual
                        mark on the pottery wares it produces, a different mark
                        each time, the same way a potter leaves his handprint on
                        his creations.
                    </p>
                    <NoStretchImage
                        fluid={this.image3}
                        style={imageWrapperStyle}
                    />
                    <h2>v1.0</h2>
                    <p>
                        The first presented series of Industrial one of,
                        “Machine’s handmade”, was made to demonstrate the
                        machine’s versatility. “By changing the parameters and
                        the limits of the code, I was able to make the machine
                        ‘behave’ like different characters - gentle, aggressive
                        or lazy - which directly influenced the morphology of
                        the series the machine is making”.
                    </p>
                    <p>
                        The same manufacturing run (same code with the same
                        exact parameters) produces pottery “siblings”, pottery
                        ware that look like they came from the same production
                        line, but the code makes each one distinguishable. Every
                        piece produced is one of a kind.
                    </p>
                    <NoStretchImage
                        fluid={this.v1_0_white}
                        style={imageWrapperStyle}
                    />
                    <div className={pageStyle.caption}>
                        This group of pottery was created with the same exact
                        code, yet each piece is unique.
                    </div>
                    <NoStretchImage
                        fluid={this.v1_0_dark}
                        style={imageWrapperStyle}
                    />
                    <div className={pageStyle.caption}>
                        This group of pottery was created with the same code as
                        the other group, but with a different set of pre-defined
                        range of parameters. Changing the parameters enables the
                        machine to create ceramic sets with different
                        characteristics.
                    </div>
                    <p>
                        The string moves up and down tens of times, and thus
                        creates waves on the clay’s surface. This technology
                        creates a unique aesthetic that tells the manufacturing
                        story and provides a mechanical interpretation of the
                        sculptor’s hands.
                    </p>
                    <NoStretchImage
                        fluid={this.image4}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.image11}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.image8}
                        style={imageWrapperStyle}
                    />
                    <iframe
                        title="Indusrial One Of v1.0 video"
                        src="https://player.vimeo.com/video/225211213"
                        width={this.state.contentWidth}
                        height={this.state.contentWidth / 1.778}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                    <h2>v2.0</h2>
                    <p>
                        Industrial one of 2.0 explores the ceramic ornament. In
                        this series the machine was given a new role - creating
                        the graphic illustration on the edges of the plates.
                        Each plate was carved from one of many identical layered
                        masses of clay - created from clay layers in different
                        natural colors. The string’s unique movement, different
                        each time, cut through the clay’s surface, revealing a
                        one of a kind ornament each time.
                    </p>
                    <NoStretchImage
                        fluid={this.v2_0_1}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v2_0_2}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v2_0_3}
                        style={imageWrapperStyle}
                    />
                    <img
                        src={v2_0_gif}
                        width={this.state.contentWidth}
                        alt=""
                    ></img>
                    <iframe
                        title="Indusrial One Of v2.0 video"
                        src="https://player.vimeo.com/video/308311075"
                        width={this.state.contentWidth}
                        height={this.state.contentWidth / 1.778}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                    <h2>v3.0</h2>
                    <p>
                        Industrial one of 3.0 explores the post-industrial,
                        anti-serial, coded, and singular era. The starting point
                        for this reserch was ceramic ware, products of the
                        industrial world, from various factories worldwide
                        (Rosenthal, Wedgwood, Herend, IKEA, and Villeroy & Boch)
                        due to their unique international status and high
                        standing in European culture, as well as their personal
                        significance in my extended family's vitrines. Their
                        reproduction by the machine and its operating algorithm
                        infuses them with a new interpretation, eliciting
                        questions: What would be the language of these factories
                        in the future? What will the language of craft look like
                        in tomorrow's world, and what will the new meaning of
                        art and design be in the post-industrial age?
                    </p>
                    <NoStretchImage
                        fluid={this.v3_0_1}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_2}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_3}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_4}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_5}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_6}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_7}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_8}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_9}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_10}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_11}
                        style={imageWrapperStyle}
                    />
                    <NoStretchImage
                        fluid={this.v3_0_12}
                        style={imageWrapperStyle}
                    />
                    <iframe
                        title="Indusrial One Of v3.0 video"
                        src="https://player.vimeo.com/video/393245651"
                        width={this.state.contentWidth}
                        height={this.state.contentWidth / 1.778}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            </Layout>
        )
    }
}

export default OneOfPage

// images query
export const query = graphql`
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
        v1_0_white: file(relativePath: { eq: "one-of/v1.0/v1.0 (10).jpg" }) {
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
    }
`
