import React from 'react'
import styled from 'styled-components'

function VideoPlayer(props) {
    const data = { ...props, src: undefined }
    return (
        <Wrapper>
            <VideoWrapper>
                <Video {...data}>
                    <source src={props.src} type="video/mp4"></source>
                </Video>
            </VideoWrapper>
        </Wrapper>
    )
}

export default VideoPlayer

const Wrapper = styled.div`
    padding-bottom: 1.45rem;
`
// todo - add dynamic aspect ratios
const VideoWrapper = styled.div`
    position: relative;
    // padding-bottom: 56.25%; /* 16:9 */
    padding-bottom: 100%; /* 1:1 */
    height: 0;
`
const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
