import React from 'react'

import Layout from '../components/layout'

import pageStyles from './one-of.module.scss'

// pictures
import machine from '../assets/one-of/oneof (1).jpg'
import v1_0_dark from '../assets/one-of/v1.0/v1.0 (2).jpg'
import v1_0_white from '../assets/one-of/v1.0/v1.0 (10).jpg'
import image3 from '../assets/one-of/v1.0/v1.0 (3).jpg'
import image4 from '../assets/one-of/v1.0/v1.0 (4).jpg'
import image11 from '../assets/one-of/v1.0/v1.0 (11).jpg'
import image8 from '../assets/one-of/v1.0/v1.0 (8).jpg'

import v2_0_1 from '../assets/one-of/v2.0/SHIBUSH 3.jpg'
import v2_0_2 from '../assets/one-of/v2.0/SHIBUSH 1.jpg'
import v2_0_3 from '../assets/one-of/v2.0/SHIBUSH 2.jpg'
import v2_0_gif from '../assets/one-of/v2.0/Industrial one of.gif'

import v3_0_1 from '../assets/one-of/v3.0/v3.0 (13).jpg'
import v3_0_2 from '../assets/one-of/v3.0/v3.0 (12).jpg'
import v3_0_3 from '../assets/one-of/v3.0/v3.0 (11).jpg'
import v3_0_4 from '../assets/one-of/v3.0/v3.0 (9).jpg'
import v3_0_5 from '../assets/one-of/v3.0/v3.0 (10).jpg'
import v3_0_6 from '../assets/one-of/v3.0/v3.0 (14).jpg'
import v3_0_7 from '../assets/one-of/v3.0/v3.0 (15).jpg'
import v3_0_8 from '../assets/one-of/v3.0/v3.0 (3).jpg'
import v3_0_9 from '../assets/one-of/v3.0/v3.0 (4).jpg'
import v3_0_10 from '../assets/one-of/v3.0/v3.0 (8).jpg'
import v3_0_11 from '../assets/one-of/v3.0/v3.0 (5).jpg'
import v3_0_12 from '../assets/one-of/v3.0/v3.0 (7).jpg'

class OneOfPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { imageWidth: 0 }

        this.imageRef = React.createRef()
        this.gifRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setImageWidth)
        window.addEventListener('resize', this.setImageWidth)
        //this.gifRef.current.addEventListener('load', this.setImageWidth)
    }

    setImageWidth = () => {
        const imageWidth = this.imageRef.current.clientWidth
        this.setState({ imageWidth: imageWidth })
    }

    // setImageWidth = () => {
    //     const imageWidth = this.imageRef.current.clientWidth
    //     this.setState({ imageWidth: imageWidth })
    // }

    render() {
        return (
            <Layout>
                <h1>Industrial One Of</h1>
                <h3>
                    A machine that manufactures one of a kind pottery ware, by
                    leaving its unique handprint on each creation.
                </h3>
                <p>
                    Industrial one of is an ongoing project that examines the
                    feasibility of “one of a kind” industrial manufacturing.
                </p>
                <p>
                    For me, the world of ceramics was fertile ground for
                    exploring this issue, since it contains the two extremes:
                    The most industrial aspects, and the craftiest aspects,
                    which exist side by side. In the world that we live in
                    today, multidimensional, cooperative and global, I believe
                    that the two worlds do not have to remain separate, and that
                    we have the tools to connect them. From the craft world, I
                    took the spirit, the values, the sensations and the formal
                    character, From the industrial world, I took the methods of
                    production, the technology, and the machinery. When combined
                    together, they create a new manufacturing method that is
                    very characteristic of our time period – innovation
                    alongside uniqueness.
                </p>
                <p>
                    At the center of the project stands a machine, that
                    manufactures one of a kind pottery ware. The machine is a
                    take on a traditional ceramic jigger. This adaptation was
                    made after thorough observation and analysis of the
                    industrial production of ceramic tableware.
                </p>
                <p>
                    Industrial one of attempts to anthropomorphize the machine,
                    so the results will seem closer to the way a person would
                    have crafted them. An artisan, even the best one, is not a
                    machine, and his movements while sculpting material are
                    never perfect. The imperfections of handmade products are
                    the main reason for their desirable and rare beauty. They
                    echo the time during which the material was in the artist’s
                    hands, a one-time occurrence, in which a one of a kind shape
                    is created that can never be replicated.
                </p>
                <p>
                    The machine is programmed to insert its own individual mark
                    on the pottery wares it produces, a different mark each
                    time, the same way a potter leaves his handprint on his
                    creations.
                </p>
                <img ref={this.imageRef} src={machine}></img>
                <img src={image3}></img>
                <h2>v1.0</h2>
                <p>
                    The first presented series of Industrial one of, “Machine’s
                    handmade”, was made to demonstrate the machine’s
                    versatility. “By changing the parameters and the limits of
                    the code, I was able to make the machine ‘behave’ like
                    different characters - gentle, aggressive or lazy - which
                    directly influenced the morphology of the series the machine
                    is making”.
                </p>
                <p>
                    The same manufacturing run (same code with the same exact
                    parameters) produces pottery “siblings”, pottery ware that
                    look like they came from the same production line, but the
                    code makes each one distinguishable. Every piece produced is
                    one of a kind.
                </p>
                <img src={v1_0_white}></img>
                <div className={pageStyles.caption}>
                    This group of pottery was created with the same exact code,
                    yet each piece is unique.
                </div>
                <img src={v1_0_dark}></img>
                <div className={pageStyles.caption}>
                    This group of pottery was created with the same code as the
                    other group, but with a different set of pre-defined range
                    of parameters. Changing the parameters enables the machine
                    to create ceramic sets with different characteristics.
                </div>
                <p>
                    The string moves up and down tens of times, and thus creates
                    waves on the clay’s surface. This technology creates a
                    unique aesthetic that tells the manufacturing story and
                    provides a mechanical interpretation of the sculptor’s
                    hands.
                </p>
                <img src={image4}></img>
                <img src={image11}></img>
                <img src={image8}></img>
                <iframe
                    src="https://player.vimeo.com/video/225211213"
                    width={this.state.imageWidth}
                    height={this.state.imageWidth / 1.778}
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                ></iframe>
                <h2>v2.0</h2>
                <p>
                    Industrial one of 2.0 explores the ceramic ornament. In this
                    series the machine was given a new role - creating the
                    graphic illustration on the edges of the plates. Each plate
                    was carved from one of many identical layered masses of clay
                    - created from clay layers in different natural colors. The
                    string’s unique movement, different each time, cut through
                    the clay’s surface, revealing a one of a kind ornament each
                    time.
                </p>
                <img src={v2_0_1}></img>
                <img src={v2_0_2}></img>
                <img src={v2_0_3}></img>
                <img src={v2_0_gif} width={this.state.imageWidth}></img>
                <iframe
                    src="https://player.vimeo.com/video/308311075"
                    width={this.state.imageWidth}
                    height={this.state.imageWidth / 1.778}
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                ></iframe>
                <h2>v3.0</h2>
                <p>
                    Industrial one of 3.0 explores the post-industrial,
                    anti-serial, coded, and singular era. The starting point for
                    this reserch was ceramic ware, products of the industrial
                    world, from various factories worldwide (Rosenthal,
                    Wedgwood, Herend, IKEA, and Villeroy & Boch) due to their
                    unique international status and high standing in European
                    culture, as well as their personal significance in my
                    extended family's vitrines. Their reproduction by the
                    machine and its operating algorithm infuses them with a new
                    interpretation, eliciting questions: What would be the
                    language of these factories in the future? What will the
                    language of craft look like in tomorrow's world, and what
                    will the new meaning of art and design be in the
                    post-industrial age?
                </p>
                <img src={v3_0_1}></img>
                <img src={v3_0_2}></img>
                <img src={v3_0_3}></img>
                <img src={v3_0_4}></img>
                <img src={v3_0_5}></img>
                <img src={v3_0_6}></img>
                <img src={v3_0_7}></img>
                <img src={v3_0_8}></img>
                <img src={v3_0_9}></img>
                <img src={v3_0_10}></img>
                <img src={v3_0_11}></img>
                <img src={v3_0_12}></img>
                <iframe
                    src="https://player.vimeo.com/video/393245651"
                    width={this.state.imageWidth}
                    height={this.state.imageWidth / 1.778}
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                ></iframe>
            </Layout>
        )
    }
}

export default OneOfPage
