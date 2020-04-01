import React from 'react'
// style
import '../styles/index.scss'
// components
import layoutStyle from '../styles/layout.module.scss'
import Header from './header'
import Footer from './footer'
// constants
import { preloadImage } from '../constants/one-of.constants'
import v1_0_gif from '../assets/one-of/v1.0/v1.gif'
import v2_0_gif from '../assets/one-of/v2.0/Industrial one of.gif'

const Layout = props => {
    const { activeItem } = props

    // gif preloading
    preloadImage(v1_0_gif)
    preloadImage(v2_0_gif)

    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header activeItem={activeItem} />
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout
