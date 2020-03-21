import React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/navigation/NavBar'

// style
import headerStyles from '../styles/header.module.scss'

// constans
import { mediaWidth } from '../constants/one-of.constants'

// icon
import menuIcon from '../assets/menu-toggle.png'
import xIcon from '../assets/menu-toggle-x.png'
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

        this.state = { active: false }
    }

    componentDidMount() {
        this.isPhoneDisplay = window.matchMedia(`(max-width: ${mediaWidth}`)
        document.body.classList.remove(`${headerStyles.disableScroll}`)
    }

    onToggle = () => {
        if (this.isPhoneDisplay.matches) {
            ;(this.state.active ? this.closeMenu : this.openMenu)()
        }
    }

    openMenu = () => {
        this.setState({ active: true })
        document.body.classList.add(`${headerStyles.disableScroll}`)
    }

    closeMenu = () => {
        this.setState({ active: false })
        document.body.classList.remove(`${headerStyles.disableScroll}`)
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
                    isNavActive={this.state.active}
                    activeItem={this.props.activeItem}
                ></NavBar>
                {/* todo understand why this is undefined in method when 
                    removing here the arrow function */}
                <div
                    className={`${headerStyles.menuToggle} ${
                        this.state.active
                            ? headerStyles.activeNavbar
                            : headerStyles.inactiveNavbar
                    }`}
                >
                    <img
                        className={headerStyles.menuIcon}
                        src={menuIcon}
                        onClick={this.onToggle}
                        alt=""
                    ></img>
                    <img
                        className={headerStyles.xIcon}
                        src={xIcon}
                        onClick={this.onToggle}
                        alt=""
                    ></img>
                </div>
            </header>
        )
    }
}

export default Header
