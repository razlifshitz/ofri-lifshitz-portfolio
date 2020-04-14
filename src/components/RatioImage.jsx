import React from 'react'

// for lazy loading
// see https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
// const placeholderSrc = (width, height) =>
//     `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`

const RatioImage = ({ url, width, height, className }) => {
    return (
        <img
            className={className}
            style={{ width: '100%', height: 'auto' }}
            src={url}
            width={width}
            height={height}
            alt=""
        />
    )
}

export default RatioImage
