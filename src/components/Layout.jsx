import React from 'react'
// style
import '../styles/index.scss'
// components
import layoutStyle from '../styles/layout.module.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ activeItem, children }) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header activeItem={activeItem} />
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout
