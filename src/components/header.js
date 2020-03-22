import React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/navigation/NavBar'

// style
import headerStyles from '../styles/header.module.scss'
import logo from '../assets/logos/logo 18.3.20.png'

const items = [
    {
        id: 'ABOUT',
        name: 'About',
        slug: '/about/',
    },
    {
        id: 'INDUSTRIAL_ONE_OF',
        name: 'Industrial One Of',
        slug: '/one-of/',
    },
    {
        id: 'PRESS',
        name: 'Press',
        slug: '/press/',
    },
    {
        id: 'CONTACT',
        name: 'Contact',
        slug: '/contact/',
    },
]

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <header className={headerStyles.Header}>
            <header>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <img src={logo} onClick={this.closeMenu}></img>
                    </Link>
                </div>
                <NavBar
                    items={items}
                    activeItem={this.props.activeItem}
                ></NavBar>
            </header>
        )
    }
}

export default Header
