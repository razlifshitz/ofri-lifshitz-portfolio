import React, { useState, useRef } from 'react'
import style from '../styles/contact.module.scss'
import NoStretchImage from './NoStretchImage'
import Carousel from './Carousel'
import { useResize, useHasMount } from '../hooks'

function RotatingPlateDialog({
    title,
    children,
    images,
    activeIndex,
    transitionLength,
    isConstantImage,
}) {
    // ref
    const wrapperRef = useRef()
    const formRef = useRef()
    // state
    const [isMobileView, setIsMobileView] = useState(null)
    const hasMounted = useHasMount()

    useResize(() => {
        const result = window.matchMedia(
            `(max-width: ${style.contactMobileDisplay}`
        )

        setIsMobileView(result.matches)
    }, [])

    /**
     * Jsx getters
     */

    function getImageJsx() {
        return (
            <div className={style.plateWrapper}>
                {isConstantImage ? (
                    // 1. showing single constant image on
                    //    contact-success & 404
                    // 2. using hasMounted to prevent SSR cause activeIndex was
                    //    generated randomly
                    hasMounted && (
                        <NoStretchImage
                            fluid={images[activeIndex].src}
                            className={style.rotatingImage}
                        ></NoStretchImage>
                    )
                ) : (
                    <Carousel
                        aspectRatio={{ width: 1, height: 1 }}
                        activeIndex={activeIndex}
                        transitionLength={transitionLength}
                        images={images}
                        wrapperClass={style.rotatingImage}
                    ></Carousel>
                )}
            </div>
        )
    }

    function getContentJsx() {
        if (isMobileView === null) {
            return null
        } else if (isMobileView) {
            return (
                <div>
                    {getImageJsx()}
                    {children}
                </div>
            )
        } else {
            return children
        }
    }

    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div ref={formRef} className={style.form}>
                <h1 className={style.title}>{title}</h1>
                {getContentJsx()}
            </div>
            {!isMobileView ? getImageJsx() : null}
        </div>
    )
}

export default RotatingPlateDialog
