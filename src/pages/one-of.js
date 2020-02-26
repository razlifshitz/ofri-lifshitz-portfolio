import React from 'react'

import Layout from '../components/layout'
import picture from '../assets/industrial1.jpg'

const OneOfPage = () => {
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
                For me, the world of ceramics was fertile ground for exploring
                this issue, since it contains the two extremes: The most
                industrial aspects, and the craftiest aspects, which exist side
                by side. In the world that we live in today, multidimensional,
                cooperative and global, I believe that the two worlds do not
                have to remain separate, and that we have the tools to connect
                them. From the craft world, I took the spirit, the values, the
                sensations and the formal character, From the industrial world,
                I took the methods of production, the technology, and the
                machinery. When combined together, they create a new
                manufacturing method that is very characteristic of our time
                period – innovation alongside uniqueness.
            </p>
            <p>
                At the center of the project stands a machine, that manufactures
                one of a kind pottery ware. The machine is a take on a
                traditional ceramic jigger. This adaptation was made after
                thorough observation and analysis of the industrial production
                of ceramic tableware.
            </p>
            <p>
                Industrial one of attempts to anthropomorphize the machine, so
                the results will seem closer to the way a person would have
                crafted them. An artisan, even the best one, is not a machine,
                and his movements while sculpting material are never perfect.
                The imperfections of handmade products are the main reason for
                their desirable and rare beauty. They echo the time during which
                the material was in the artist’s hands, a one-time occurrence,
                in which a one of a kind shape is created that can never be
                replicated.
            </p>
            <p>
                The machine is programmed to insert its own individual mark on
                the pottery wares it produces, a different mark each time, the
                same way a potter leaves his handprint on his creations.
            </p>
            <img src={picture}></img>
        </Layout>
    )
}

export default OneOfPage
