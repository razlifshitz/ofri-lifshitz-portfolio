import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHasMount } from '../hooks'
// Components
import NoStretchImage from './NoStretchImage'
import { AspectRatioBox } from '../styled-components'

function Carousel({
    images,
    activeIndex,
    aspectRatio,
    // optional
    interval,
    onImageChange,
    transitionLength,
    wrapperClass,
}) {
    const hasMounted = useHasMount(true)

    // on active image change
    useEffect(() => {
        // preparing next transition
        let timeoutKey = null
        if (interval) {
            timeoutKey = setTimeout(next, interval)
        }

        return () => {
            if (timeoutKey) {
                clearTimeout(timeoutKey)
            }
        }
    }) // todo add array of dependancies when RotatingPlateDialog will be
    // a functional component

    // todo wrap in a useCallback when addind array of depandencies
    // to useEffect
    function next() {
        let newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

        onImageChange(newIndex)
    }

    // Not in use for now
    // function previous() {
    //     let newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    //     onImageChange(newIndex)
    // }

    return (
        <>
            <AspectRatioBox
                width={aspectRatio.width}
                height={aspectRatio.height}
            >
                {images.map((image, index) => (
                    <Wrapper
                        key={image.id}
                        activeImage={hasMounted && index === activeIndex}
                        transitionLength={transitionLength}
                    >
                        <NoStretchImage
                            fluid={image.src}
                            className={wrapperClass}
                        ></NoStretchImage>
                    </Wrapper>
                ))}
            </AspectRatioBox>
            {/* <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button> */}
        </>
    )
}

export default Carousel

const Wrapper = styled.div`
    display: block;
    position: absolute;
    width: 100%;
    opacity: ${props => (props.activeImage ? '1' : '0')};
    transition: opacity ${props => props.transitionLength};
`

Carousel.propTypes = {
    aspectRatio: PropTypes.objectOf(PropTypes.number).isRequired,
    transitionLength: PropTypes.string,
}

Carousel.defaultProps = {
    aspectRatio: { height: 1, width: 1 },
    transitionLength: '1500ms',
}
