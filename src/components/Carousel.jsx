import React, { useState, useEffect } from 'react'
import style from '../styles/carousel.module.scss'
import NoStretchImage from './NoStretchImage'

function Carousel(props) {
    const [activeIndex, setActiveIndex] = useState(props.activeIndex || 0)

    // ON INIT
    useEffect(() => {
        let intervalKey = null
        if (props.interval) {
            intervalKey = setInterval(next, props.interval)
        }

        // notify about intialization of first image
        onImageChange(activeIndex)

        // ON DESTROY
        return () => {
            if (intervalKey) {
                clearInterval(intervalKey)
            }
        }
    }, [])

    // useEffect(() => {
    //     setActiveIndex(props.activeIndex)
    // }, [props.activeIndex])

    function next() {
        let newIndex = null

        setActiveIndex(prevIndex => {
            newIndex = prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
            return newIndex
        })

        onImageChange(newIndex)
    }

    function previous() {
        let newIndex = null

        setActiveIndex(prevIndex => {
            newIndex = prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
            return newIndex
        })

        onImageChange(newIndex)
    }

    /**
     * Updating dominant color
     */
    function onImageChange(newIndex) {
        if (props.onImageChange) {
            props.onImageChange(props.images[newIndex].dominantColor)
        }
    }

    /**
     * JSX gettrers
     */
    function getActiveImageJsx(image) {
        return (
            <div
                style={{ display: 'block' }}
                className={style.mySlides + ' ' + style.fade}
            >
                <NoStretchImage
                    fluid={image.src}
                    className={props.wrapperClass}
                    imgStyle={{ width: '100%' }}
                ></NoStretchImage>
            </div>
        )
    }

    function getHiddenImageJsx(image) {
        return (
            <div
                style={{ display: 'none' }}
                className={style.mySlides + ' ' + style.fade}
            >
                <NoStretchImage
                    fluid={image.src}
                    imgStyle={{ width: '100%' }}
                    loading="eager"
                ></NoStretchImage>
            </div>
        )
    }

    function getImageJsx(image, index) {
        return index === activeIndex
            ? getActiveImageJsx(image)
            : getHiddenImageJsx(image)
    }

    return (
        <div className={style.slideshowContainer}>
            {props.images.map((image, index) => (
                <div key={image.id}>{getImageJsx(image, index)}</div>
            ))}
            {/* <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button> */}
        </div>
    )
}

export default Carousel
