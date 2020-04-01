import React from 'react'
// style
import '../styles/index.scss'
// components
import layoutStyle from '../styles/layout.module.scss'
import Header from './header'
import Footer from './footer'

const Layout = props => {
    const { activeItem } = props

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
