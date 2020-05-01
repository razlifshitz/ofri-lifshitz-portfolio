import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
// style
import style from '../styles/home.module.scss'
// constants
import { HOME, ONE_OF } from '../constants/one-of.constants'
// hooks
import { useCarouselImages } from '../hooks/graphql/useCarouselImages'
// Components
import { GreyLink } from '../styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Carousel from '../components/Carousel'

const TRANSITION_LENGTH = '2000ms'

function IndexPage() {
    const textRef = useRef()
    const carouselImages = useCarouselImages()
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    function onImageChange(index) {
        setActiveImageIndex(index)
    }

    // updating text color according to current active image dominant color
    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.color =
                carouselImages[activeImageIndex].dominantColor
        }
    }, [activeImageIndex, carouselImages])

    return (
        <Layout activeItem={HOME}>
            <SEO
                pathname={HOME.slug}
                description="Hi! I'm Ofri, an Israeli designer and creator
                of industrial one-of a kind pieces. I specialize in digital
                craft, conceptual design along with manufacturing methods."
            ></SEO>
            <div className={style.container}>
                <p className={style.homeDescription}>
                    Hi! I'm Ofri, an Israeli designer and creator of{' '}
                    <MultiColorLink to={ONE_OF.slug} ref={textRef}>
                        industrial one-of
                    </MultiColorLink>{' '}
                    a kind pieces. I specialize in digital craft, conceptual
                    design along with manufacturing methods.
                </p>
                <Carousel
                    images={carouselImages}
                    activeIndex={activeImageIndex}
                    aspectRatio={{ width: 3, height: 2 }}
                    interval="5000"
                    transitionLength={TRANSITION_LENGTH}
                    onImageChange={onImageChange}
                ></Carousel>
            </div>
        </Layout>
    )
}

export default IndexPage

const MultiColorLink = styled(GreyLink)`
    transition: color ${TRANSITION_LENGTH};
    color: #4ba1cc;
    cursor: pointer;
`
