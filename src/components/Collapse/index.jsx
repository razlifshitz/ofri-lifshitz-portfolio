import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// style
import baseStyle from '../../styles/base.module.scss'
// components
import { GreyLink } from '../../styled-components'
// icons
import chevron_right from '../../assets/icons/chevron_right-black-24dp.svg'
import expand_more from '../../assets/icons/expand_more-black-24dp.svg'

function Collapse({ isOpen, header, children }) {
    const [open, setIsOpen] = useState(isOpen)
    const headerRef = useRef()
    const contentRef = useRef()

    const toggle = () => {
        setIsOpen(!open)
    }

    useEffect(() => {
        if (open) {
            headerRef.current.classList.add('active')
            contentRef.current.style.maxHeight =
                contentRef.current.scrollHeight + 'px'
        } else {
            headerRef.current.classList.remove('active')
            contentRef.current.style.maxHeight = null
        }
    }, [open])

    return (
        <Wrapper ref={headerRef}>
            <Header as="span" onClick={toggle}>
                {header}
            </Header>
            <Content ref={contentRef}>{children}</Content>
        </Wrapper>
    )
}

export default Collapse

const Wrapper = styled.div`
    text-align: left;
`

const Header = styled(GreyLink)`
    // cancel hover effect
    @media (max-width: ${baseStyle.mediaLarge}) {
        &:hover {
            color: inherit;
            opacity: inherit;
        }
    }

    .active & {
        color: #6d6e71;
        opacity: 0.6;
    }

    // ARROW STYLES

    &::before {
        // content: '\\002B';
        content: url(${chevron_right});
        font-weight: bold;
        float: left;
        margin: 2px 5px 0 0;
        transition: 0.3s;
    }
    .active &::before {
        color: #6d6e71;
        opacity: 0.6;
    }
    .active &::before {
        // content: '\\2212';
        content: url(${expand_more});
    }

    @media (min-width: ${baseStyle.mediaLarge}) {
        &:hover::before {
            color: #6d6e71;
            opacity: 0.6;
        }
    }
`

const Content = styled.div`
    margin: 1.45rem 1.2rem 0;

    // padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    // background-color: #f1f1f1;
`

// const Header = styled.div`
//     // background-color: #777;
//     // color: white;
//     cursor: pointer;
//     // padding: 18px;
//     // width: 100%;
//     // border: none;
//     text-align: left;
//     padding: 1.45rem 0;
//     // outline: none;
//     // font-size: 15px;
//     user-select: none;

//     //grey link
//     color: black;
//     font-weight: bold;
//     opacity: 1;
//     transition: 0.3s;
//     cursor: pointer;

//     &.active {
//         // background-color: #555;
//         // text-decoration: underline;
//         // font-weight: 500;

//         // grey link
//         color: #6d6e71;
//         opacity: 0.6;
//     }

//     @media (min-width: ${baseStyle.mediaLarge}) {
//         &:hover {
//             // background-color: #555;
//             // text-decoration: underline;
//             // font-weight: 500;

//             // grey link
//             color: #6d6e71;
//             opacity: 0.6;
//         }
//     }

//     // ARROW

//     &::before {
//         // content: '\\002B';
//         content: url(${chevron_right});
//         font-weight: bold;
//         float: left;
//         margin-right: 5px;
//         transition: 0.3s;
//     }
//     &.active::before {
//         // grey link
//         color: #6d6e71;
//         opacity: 0.6;
//     }
//     &.active::before {
//         // content: '\\2212';
//         content: url(${expand_more});
//     }

//     @media (min-width: ${baseStyle.mediaLarge}) {
//         &:hover::before {
//             // grey link
//             color: #6d6e71;
//             opacity: 0.6;
//         }
//     }
// `
