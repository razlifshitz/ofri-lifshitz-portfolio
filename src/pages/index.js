import React, { useRef } from 'react'
import styled from 'styled-components'
// style
import style from '../styles/home.module.scss'
// constants
import { HOME } from '../constants/one-of.constants'
// hooks
import { useCarouselImages } from '../hooks/graphql/useCarouselImages'
// Components
import { GreyLink } from '../styled-components'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

function IndexPage() {
    const textRef = useRef()
    const carouselImages = useCarouselImages()

    function onColorChange(color) {
        if (textRef.current) {
            textRef.current.style.color = color
        }
    }

    return (
        <Layout activeItem={HOME}>
            <div className={style.container}>
                <p className={style.homeDescription}>
                    Hi! I'm Ofri, an Israeli designer and creator of{' '}
                    <MultiColorLink to="/one-of" ref={textRef}>
                        industrial one-of
                    </MultiColorLink>{' '}
                    a kind pieces. I specialize in digital craft, conceptual
                    design along with manufacturing methods.
                </p>
                <Carousel
                    images={carouselImages}
                    interval="4000"
                    onImageChange={onColorChange}
                ></Carousel>
            </div>
        </Layout>
    )
}

export default IndexPage

const MultiColorLink = styled(GreyLink)`
    transition: 2s;
    color: #4ba1cc;
    cursor: pointer;
`
