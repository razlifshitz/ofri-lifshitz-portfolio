import React from 'react'
import styled from 'styled-components'
import { AspectRatioBox } from '../../styled-components'

function VideoPlayer(props) {
    const { src, ...rest } = props
    return (
        <Wrapper>
            <AspectRatioBox width={1} height={1}>
                <Video {...rest}>
                    <source src={src} type="video/mp4"></source>
                </Video>
            </AspectRatioBox>
        </Wrapper>
    )
}

export default VideoPlayer

const Wrapper = styled.div`
    padding-bottom: 1.45rem;
`

const Video = styled.video`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
