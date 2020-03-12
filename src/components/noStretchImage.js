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

    normalizedProps = {
        ...props,
        style: {
            ...(props.style || {}),
            marginBottom: '1.1rem',
        },
        imgStyle: {
            ...(props.imgStyle || {}),
            pointerEvents: 'none',
        },
    }

    return <Img {...normalizedProps} />
}

export default NonStretchedImage
