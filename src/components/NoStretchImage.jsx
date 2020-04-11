import React from 'react'
import Img from 'gatsby-image'

const NonStretchedImage = props => {
    let normalizedProps = props

    // TODO add presentationWidth to query
    // if (props.fluid && props.fluid.presentationWidth) {
    //     normalizedProps = {
    //         ...props,
    //         style: {
    //             ...(props.style || {}),
    //             maxWidth: props.fluid.presentationWidth,
    //             margin: '0 auto', // Used to center the image
    //         },
    //         imgStyle: {
    //             ...(props.imgStyle || {}),
    //             pointerEvents: 'none',
    //         },
    //     }
    // }

    const marginBottom =
        props.style && props.style.marginBottom
            ? props.style.marginBottom
            : '1.1rem'

    const pointerEvents =
        props.style && props.style.pointerEvents
            ? props.style.pointerEvents
            : 'none'

    normalizedProps = {
        ...props,
        style: {
            ...(props.style || {}),
            marginBottom: marginBottom,
        },
        imgStyle: {
            ...(props.imgStyle || {}),
            pointerEvents: pointerEvents,
        },
    }

    return <Img {...normalizedProps} />
}

export default NonStretchedImage
