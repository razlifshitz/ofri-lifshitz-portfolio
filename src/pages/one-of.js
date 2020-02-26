import React from 'react'

import Layout from '../components/layout'

import pageStyles from './one-of.module.scss'

// pictures
import machine from '../assets/one-of/oneof (1).jpg'
import v1_0_dark from '../assets/one-of/v1.0/v1.0 (2).jpg'
import v1_0_white from '../assets/one-of/v1.0/v1.0 (10).jpg'

class OneOfPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { imageWidth: 0 }

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setImageWidth)
    }

    setImageWidth = () => {
        const imageWidth = this.imageRef.current.clientWidth
        this.setState({ imageWidth: imageWidth })
    }

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
                <iframe
                    src="https://player.vimeo.com/video/225211213"
                    width={this.state.imageWidth}
                    height={this.state.imageWidth / 2}
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
            </Layout>
        )
    }
}

export default OneOfPage
