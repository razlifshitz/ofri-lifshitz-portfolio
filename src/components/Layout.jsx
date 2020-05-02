import React, { useState } from 'react'
import styled from 'styled-components'
// style
import '../styles/index.scss'
// components
import layoutStyle from '../styles/layout.module.scss'
import { useResize } from '../hooks'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Layout = ({ activeItem, children }) => {
    const [contentHeight, setContentHeight] = useState(null)

    useResize(() => {
        setContentHeight(window.innerHeight)
    }, [])

    return (
        <>
            <SEO></SEO>
            <Container
                className={layoutStyle.container}
                contentHeight={contentHeight}
            >
                <div className={layoutStyle.content}>
                    <Header activeItem={activeItem} />
                    {children}
                </div>

                <Footer />
            </Container>
        </>
    )
}

export default Layout

const Container = styled.div`
    min-height: ${params =>
        params.contentHeight ? params.contentHeight + 'px' : '100vh'};
`
