import React from 'react'
import VideoPlayer from './VideoPlayer'

function VideoGifPlayer(props) {
    return (
        <VideoPlayer {...props} autoPlay loop muted playsInline></VideoPlayer>
    )
}

export default VideoGifPlayer
