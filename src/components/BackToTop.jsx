import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useScroll } from '../hooks'
import icon from '../assets/back-to-top.png'
import baseStyle from '../styles/base.module.scss'
// const ScrollingWrapperContainer = styled.div`
//     overflow-y: scroll;
//     -webkit-overflow-scrolling: touch;
//     height: 100%;
//     position: relative;
// `

function BackToTop() {
    const [scroll, setScroll] = useScroll()

    function scrollToTop() {
        setScroll(0)
    }

    // Adding smooth scroll to html
    useEffect(() => {
        const htmlElem = document.getElementsByTagName('html')[0]
        htmlElem.classList.add(`${baseStyle.smoothScroll}`)

        return () => {
            htmlElem.classList.remove(`${baseStyle.smoothScroll}`)
        }
    }, [])

    return (
        <>
            {scroll > 100 && (
                <ScrollToTopIconContainer onClick={scrollToTop}>
                    <Icon src={icon}></Icon>
                </ScrollToTopIconContainer>
            )}
        </>
    )
}

const ScrollToTopIconContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 225px;
    z-index: 2;
    opacity: 0.4;
    text-align: center;
    animation: back-to-top-fade-in 0.5s;
    &:hover {
        opacity: 1;
    }
    @keyframes back-to-top-fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 0.4;
            transform: translateY(0);
        }
    }
    @media (max-width: ${baseStyle.mediaMediumDesktop}) {
        right: 175px;
    }
    @media (max-width: ${baseStyle.mediaSmallDesktop}) {
        right: 145px;
    }
    @media (max-width: 1208px) {
        right: 25px;
    }
`

const Icon = styled.img`
    width: 24px;
`

export default BackToTop
