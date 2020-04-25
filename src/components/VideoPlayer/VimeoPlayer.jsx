import React from 'react'
import styled from 'styled-components'
import { AspectRatioBox } from '../../styled-components'

function VimeoPlayer(props) {
    return (
        <Wrapper>
            <AspectRatioBox width={16} height={9}>
                <VideoIframe
                    {...props}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                ></VideoIframe>
            </AspectRatioBox>
        </Wrapper>
    )
}

export default VimeoPlayer

const Wrapper = styled.div`
    padding-bottom: 1.45rem;
`

const VideoIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
