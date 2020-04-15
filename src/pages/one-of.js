import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
// style
import pageStyle from '../styles/one-of.module.scss'
// components
import Layout from '../components/Layout'
import NoStretchImage from '../components/NoStretchImage'
import TableOfContents from '../components/TableOfContents'
import RatioImage from '../components/RatioImage'
import BackToTop from '../components/BackToTop'
import Collapse from '../components/Collapse'
import { VimeoPlayer, VideoGifPlayer } from '../components/VideoPlayer'
import { GreyLink } from '../styled-components'
// HOOKS
import { useScroll } from '../hooks'
import { useOneOfImages } from '../hooks/graphql/useOneOfImages'
// Constants
import {
    getOneOfSubMenu,
    ONE_OF,
    SCROLL_SHOW_TABLE_OF_CONTENTS,
    ACTIVE_SECTION_PADDING,
} from '../constants/one-of.constants'
// gifs
import v1Video from '../assets/one-of/v1.0/v1Video480p.mp4'
import v1VideoPoster from '../assets/one-of/v1.0/v1VideoPoster.jpg'
import v2Gif from '../assets/one-of/v2.0/Industrial one of.gif'
import styled from 'styled-components'

function OneOfPage() {
    /** CONSTANTS */
    const tableOfContents = getOneOfSubMenu()
    const images = useOneOfImages()

    // REFS
    // content ref
    const contentRef = useRef()
    // sections refs
    const theStoryBehindRef = useRef()
    const v1Ref = useRef()
    const v2Ref = useRef()
    const v3Ref = useRef()
    const v1JeruRef = useRef()

    /** STATE */
    const [readMore, setReadMore] = useState(false)
    const [activeSection, setActiveSection] = useState(null)
    const [showTableOfContents, setShowTableOfContents] = useState(false)
    const [scroll] = useScroll()

    // ON SCROLL EVENT
    useEffect(() => {
        const getActiveSection = () => {
            let result = null
            const sectionsData = [
                {
                    item: tableOfContents.INDUSTRIAL_ONE_OF,
                    ref: theStoryBehindRef,
                },
                {
                    item: tableOfContents.INDUSTRIAL_ONE_OF_1_0,
                    ref: v1Ref,
                },
                {
                    item: tableOfContents.INDUSTRIAL_ONE_OF_2_0,
                    ref: v2Ref,
                },
                {
                    item: tableOfContents.INDUSTRIAL_ONE_OF_3_0,
                    ref: v3Ref,
                },
                {
                    item: tableOfContents.INDUSTRIAL_ONE_OF_1_0_SPECIAL,
                    ref: v1JeruRef,
                },
            ]

            sectionsData.forEach(section => {
                if (
                    ACTIVE_SECTION_PADDING >
                    section.ref.current.getBoundingClientRect().top
                ) {
                    result = section.item
                }
            })

            return result
        }
        setActiveSection(getActiveSection())
        setShowTableOfContents(scroll > SCROLL_SHOW_TABLE_OF_CONTENTS)
    }, [scroll])

    /**
     * JSX getters
     */

    const getReadMoreJsx = () => {
        return (
            <ReadMoreLink
                as="span"
                show={!readMore}
                onClick={() => setReadMore(true)}
            >
                Continue reading..
            </ReadMoreLink>
        )
    }

    const getPageJsx = () => {
        return (
            <div ref={contentRef} className={pageStyle.content}>
                {/* The Story Behind */}
                <section ref={theStoryBehindRef} className={pageStyle.section}>
                    <div className={pageStyle.sectionContent}>
                        <h4>
                            A machine that manufactures one of a kind pottery
                            ware, by leaving its unique handprint on each
                            creation.
                        </h4>
                        <NoStretchImage fluid={images.image3} />
                        <div className={pageStyle.caption}>
                            Industrial One Of v1.0
                        </div>
                        <p>
                            Industrial one of is an ongoing project that
                            examines the feasibility of “one of a kind”
                            industrial manufacturing.
                        </p>
                        <p>
                            For me, the world of ceramics was fertile ground for
                            exploring this issue, since it contains the two
                            extremes: The most industrial aspects, and the
                            craftiest aspects, which exist side by side. In the
                            world that we live in today, multidimensional,
                            cooperative and global, I believe that the two
                            worlds do not have to remain separate, and that we
                            have the tools to connect them.
                        </p>
                        <p>
                            From the craft world, I took the spirit, the values,
                            the sensations and the formal character, From the
                            industrial world, I took the methods of production,
                            the technology, and the machinery. When combined
                            together, they create a new manufacturing method
                            that is very characteristic of our time period –
                            innovation alongside uniqueness. {getReadMoreJsx()}
                        </p>
                        <p
                            style={{
                                display: readMore ? 'block' : 'none',
                            }}
                            className={pageStyle.fade}
                        >
                            At the center of the project stands a machine, that
                            manufactures one of a kind pottery ware. The machine
                            is a take on a traditional ceramic jigger. This
                            adaptation was made after thorough observation and
                            analysis of the industrial production of ceramic
                            tableware.
                        </p>
                        <NoStretchImage fluid={images.machine} />
                        {/* <div className={pageStyle.caption}>The machine</div> */}
                        <p
                            style={{
                                display: readMore ? 'block' : 'none',
                            }}
                            className={pageStyle.fade}
                        >
                            Industrial one of attempts to anthropomorphize the
                            machine, so the results will seem closer to the way
                            a person would have crafted them. An artisan, even
                            the best one, is not a machine, and his movements
                            while sculpting material are never perfect. The
                            imperfections of handmade products are the main
                            reason for their desirable and rare beauty. They
                            echo the time during which the material was in the
                            artist’s hands, a one-time occurrence, in which a
                            one of a kind shape is created that can never be
                            replicated.
                        </p>
                        <NoStretchImage fluid={images.image4} />
                        <div className={pageStyle.caption}>
                            Industrial One Of v1.0
                        </div>
                        <p
                            style={{
                                display: readMore ? 'block' : 'none',
                            }}
                        >
                            The machine is programmed to insert its own
                            individual mark on the pottery wares it produces, a
                            different mark each time, the same way a potter
                            leaves his handprint on his creations.
                        </p>
                    </div>
                </section>
                {/* 1.0 */}
                <section ref={v1Ref} className={pageStyle.section}>
                    <a className={pageStyle.sectionAnchor} id="ioo_1_0">
                        &nbsp;
                    </a>
                    <div className={pageStyle.title}>
                        <h2>Industrial One Of 1.0</h2>
                        <div className={pageStyle.caption}>2017</div>
                    </div>
                    <VimeoPlayer
                        title="Indusrial One Of v1.0 video"
                        src="https://player.vimeo.com/video/225211213"
                    ></VimeoPlayer>
                    <div className={pageStyle.sectionContent}>
                        <p>
                            The first presented series of Industrial one of,
                            “Machine’s handmade”, was made to demonstrate the
                            machine’s versatility. “By changing the parameters
                            and the limits of the code, I was able to make the
                            machine ‘behave’ like different characters - gentle,
                            aggressive or lazy - which directly influenced the
                            morphology of the series the machine is making”.
                        </p>
                        <p>
                            The same manufacturing run (same code with the same
                            exact parameters) produces pottery “siblings”,
                            pottery ware that look like they came from the same
                            production line, but the code makes each one
                            distinguishable. Every piece produced is one of a
                            kind.
                        </p>
                        <NoStretchImage fluid={images.v1_0_white} />
                        <div className={pageStyle.caption}>
                            This group of pottery was created with the same
                            exact code, yet each piece is unique.
                        </div>
                        <NoStretchImage fluid={images.v1_0_dark} />
                        <div className={pageStyle.caption}>
                            This group of pottery was created with the same code
                            as the other group, but with a different set of
                            pre-defined range of parameters. Changing the
                            parameters enables the machine to create ceramic
                            sets with different characteristics.
                        </div>
                        <p>
                            The string moves up and down tens of times, and thus
                            creates waves on the clay’s surface. This technology
                            creates a unique aesthetic that tells the
                            manufacturing story and provides a mechanical
                            interpretation of the sculptor’s hands.
                        </p>
                        <p>
                            The first series of the “Industrial one of” project
                            was developed as Ofri’s graduation project at HIT,
                            Holon Institute of Technology, Industrial Design
                            Department.
                        </p>
                        <NoStretchImage fluid={images.image11} />
                        <NoStretchImage fluid={images.image8} />
                        <NoStretchImage fluid={images.image7} />
                        {/* v1 gif-Video */}
                        <VideoGifPlayer
                            poster={v1VideoPoster}
                            src={v1Video}
                        ></VideoGifPlayer>
                    </div>
                </section>
                {/* 2.0 */}
                <section ref={v2Ref} className={pageStyle.section}>
                    <a className={pageStyle.sectionAnchor} id="ioo_2_0">
                        &nbsp;
                    </a>
                    <div className={pageStyle.title}>
                        <h2>Industrial One Of 2.0</h2>
                        <div className={pageStyle.caption}>2018</div>
                    </div>
                    <VimeoPlayer
                        title="Indusrial One Of v2.0 video"
                        src="https://player.vimeo.com/video/308311075"
                    ></VimeoPlayer>
                    <div className={pageStyle.sectionContent}>
                        <p>
                            Industrial one of 2.0 explores the ceramic ornament.
                            In this series the machine was given a new role -
                            creating the graphic illustration on the edges of
                            the plates. Each plate was carved from one of many
                            identical layered masses of clay - created from clay
                            layers in different natural colors. The string’s
                            unique movement, different each time, cut through
                            the clay’s surface, revealing a one of a kind
                            ornament each time.
                        </p>
                        <NoStretchImage fluid={images.v2_0_1} />
                        <NoStretchImage fluid={images.v2_0_2} />
                        <NoStretchImage fluid={images.v2_0_3} />
                        <LastSectionRatioImage
                            url={v2Gif}
                            height={1}
                            width={1.04}
                        ></LastSectionRatioImage>
                        <PBeforeCollapse>
                            First presented in "Shibush" Exhibition - "Vitrina"
                            gallery Holon, 2018.
                        </PBeforeCollapse>
                        <Collapse header="Show exhibition photos">
                            <>
                                <NoStretchImage fluid={images.v2_0_exbit1} />
                                <NoStretchImage fluid={images.v2_0_exbit2} />
                                <NoStretchImage fluid={images.v2_0_exbit3} />
                            </>
                        </Collapse>
                    </div>
                </section>
                {/* 3.0 */}
                <section ref={v3Ref} className={pageStyle.section}>
                    <a className={pageStyle.sectionAnchor} id="ioo_3_0">
                        &nbsp;
                    </a>
                    <div className={pageStyle.title}>
                        <h2>Industrial One Of 3.0</h2>
                        <div className={pageStyle.caption}>2019-2020</div>
                    </div>
                    <VimeoPlayer
                        title="Indusrial One Of v3.0 video"
                        src="https://player.vimeo.com/video/393245651"
                    ></VimeoPlayer>
                    <div className={pageStyle.sectionContent}>
                        <p>
                            Industrial one of 3.0 explores the post-industrial,
                            anti-serial, coded, and singular era. The starting
                            point for this reserch was ceramic ware, products of
                            the industrial world, from various factories
                            worldwide (Rosenthal, Wedgwood, Herend, IKEA, and
                            Villeroy & Boch) due to their unique international
                            status and high standing in European culture, as
                            well as their personal significance in my extended
                            family's vitrines. Their reproduction by the machine
                            and its operating algorithm infuses them with a new
                            interpretation, eliciting questions: What would be
                            the language of these factories in the future? What
                            will the language of craft look like in tomorrow's
                            world, and what will the new meaning of art and
                            design be in the post-industrial age?
                        </p>
                        <NoStretchImage fluid={images.v3_0_1} />
                        {/* <div className={pageStyle.caption}>
                        Half & Half - Wedgwood
                        </div> */}
                        <NoStretchImage fluid={images.v3_0_2} />
                        {/* <div className={pageStyle.caption}>
                        Half & Half - Villeroy & boch
                        </div> */}
                        <NoStretchImage fluid={images.v3_0_3} />
                        {/* <div className={pageStyle.caption}>
                        Half & Half - Rosenthal
                        </div> */}
                        <NoStretchImage fluid={images.v3_0_4} />
                        {/* <div className={pageStyle.caption}>
                        Half & Half - Herend
                        </div> */}
                        <NoStretchImage fluid={images.v3_0_5} />
                        {/* <div className={pageStyle.caption}>Half & Half - IKEA</div> */}
                        <NoStretchImage fluid={images.v3_0_6} />
                        <NoStretchImage fluid={images.v3_0_7} />
                        <NoStretchImage fluid={images.v3_0_8} />
                        <NoStretchImage fluid={images.v3_0_9} />
                        <NoStretchImage fluid={images.v3_0_10} />
                        <NoStretchImage fluid={images.v3_0_11} />
                        <LastSectionImage fluid={images.v3_0_12} />
                        <PBeforeCollapse>
                            First presented in Industrial One Of 3.0 - Jerusalem
                            Artists’ House, 2020
                        </PBeforeCollapse>
                        <Collapse header="Show exhibition photos">
                            <>
                                <NoStretchImage fluid={images.v3_0_exbit1} />
                                <NoStretchImage fluid={images.v3_0_exbit2} />
                                <NoStretchImage fluid={images.v3_0_exbit3} />
                                <NoStretchImage fluid={images.v3_0_exbit4} />
                                <NoStretchImage fluid={images.v3_0_exbit5} />
                            </>
                        </Collapse>
                    </div>
                </section>
                {/* Jerusalem Special Edition */}
                <section ref={v1JeruRef} className={pageStyle.section}>
                    <a className={pageStyle.sectionAnchor} id="ioo_1_0_special">
                        &nbsp;
                    </a>
                    <div className={pageStyle.title}>
                        <h2>Industrial One Of Special Edition</h2>
                        <div className={pageStyle.caption}>
                            for Jerusalem Design Week 2018
                        </div>
                    </div>
                    <div className={pageStyle.sectionContent}>
                        <NoStretchImage fluid={images.vJeru10} />
                        <p>
                            V.JERU.002 is a series made for the Jerusalem Design
                            week 2018, with the use of “local material”- symbols
                            and characteristics of the city, as the raw material
                            for manufacturing. These symbols were picked and
                            merged into the raw clay as graphic ornaments. Each
                            symbol was embedded in a mass of clay of which a
                            series of plates was made. This technique enabled
                            samples of colors and shapes from all over the city
                            to become an ornament of Jerusalem and an integral
                            part of the “local material”. The Random and
                            uncontrolled aspects during the whole manufacturing
                            process assured that the ornament, like the shape of
                            the plate, will be one of a kind.
                        </p>
                        <NoStretchImage fluid={images.vJeru1} />
                        <NoStretchImage fluid={images.vJeru2} />
                        <NoStretchImage fluid={images.vJeru3} />
                        <NoStretchImage fluid={images.vJeru5} />
                        <NoStretchImage fluid={images.vJeru6} />
                        <NoStretchImage fluid={images.vJeru7} />
                        <NoStretchImage fluid={images.vJeru8} />
                        <NoStretchImage fluid={images.vJeru9} />
                        <LastSectionImage fluid={images.vJeru11} />
                        <PBeforeCollapse>
                            First presented in "Pro Jerusalem" - Jerusalem
                            Design week, 2018.
                        </PBeforeCollapse>
                        <Collapse header="Show exhibition photos">
                            <>
                                <NoStretchImage fluid={images.vJeru_exbit1} />
                                <NoStretchImage fluid={images.vJeru_exbit2} />
                                <NoStretchImage fluid={images.vJeru_exbit3} />
                            </>
                        </Collapse>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <Layout activeItem={ONE_OF}>
            <BackToTop></BackToTop>
            <a className={pageStyle.sectionAnchor} id="story_behind">
                &nbsp;
            </a>
            <h1 className={pageStyle.title}>Industrial One Of</h1>
            <TableOfContents
                scroll={scroll}
                contentsList={Object.values(tableOfContents)}
                activeItem={activeSection}
                showTableOfContents={showTableOfContents}
            ></TableOfContents>
            <div>{getPageJsx()}</div>
        </Layout>
    )
}

export default OneOfPage

const PBeforeCollapse = styled.p`
    margin-bottom: 0.4rem;
`

const ReadMoreLink = styled(GreyLink)`
    display: ${props => (props.show ? 'inline-block' : 'none')};
`

const LastSectionRatioImage = styled(RatioImage)`
    margin-bottom: 1.7rem;
`

const LastSectionImage = styled(NoStretchImage)`
    margin-bottom: 1.7rem !important;
`
