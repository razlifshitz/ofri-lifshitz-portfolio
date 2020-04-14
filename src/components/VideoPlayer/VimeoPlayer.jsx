import React from 'react'
import styled from 'styled-components'

function VimeoPlayer(props) {
    return (
        <Wrapper>
            <VideoWrapper>
                <VideoIframe
                    {...props}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                ></VideoIframe>
            </VideoWrapper>
        </Wrapper>
    )
}

export default VimeoPlayer

const Wrapper = styled.div`
    padding-bottom: 1.45rem;
`

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
`
const VideoIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
