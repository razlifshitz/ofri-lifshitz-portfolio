import styled from 'styled-components'
import React from 'react'
import { useScroll } from '../hooks'

// const ScrollingWrapperContainer = styled.div`
//     overflow-y: scroll;
//     -webkit-overflow-scrolling: touch;
//     height: 100%;
//     position: relative;
// `

const ScrollToTopIconContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 225px;
    z-index: 2;
    cursor: pointer;
    opacity: 0.4;
    text-align: center;
    animation: back-to-top-fade-in 0.5s;
    &:hover {
        opacity: 1;
        // animation: wiggle 1s ease;
        // animation-iteration-count: 1;
    }
    @keyframes wiggle {
        20% {
            transform: translateY(4px);
        }
        40% {
            transform: translateY(-4px);
        }
        60% {
            transform: translateY(2px);
        }
        80% {
            transform: translateY(-1px);
        }
        100% {
            transform: translateY(0);
        }
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
    @media (max-width: 1400px) {
        right: 175px;
    }
    @media (max-width: 1300px) {
        right: 145px;
    }
    @media (max-width: 1208px) {
        right: 20px;
    }
`

const Button = styled.div`
    background: black;
    color: white;
    font-size: 1.6rem;
    // line-height: 30px;
    border-radius: 50%;
    width: 35px;
    padding-top: 4px;
`

function BackToTop() {
    const [scroll, setScroll] = useScroll()

    function scrollToTop() {
        setScroll(0)
    }

    return (
        <>
            {scroll > 100 && (
                <ScrollToTopIconContainer onClick={scrollToTop}>
                    <Button>^</Button>
                </ScrollToTopIconContainer>
            )}
        </>
    )
}

export default BackToTop
