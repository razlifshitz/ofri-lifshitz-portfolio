import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

// constans
import { mediaWidth } from '../constants/one-of.constants'

// icon
import menuIcon from '../assets/menu-toggle.png'
import xIcon from '../assets/menu-toggle-x.png'
import logo from '../assets/logos/logo 28.2.20 C.png'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = { active: false, toggleIcon: menuIcon }
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
        this.setState({ active: true, toggleIcon: xIcon })
        document.body.classList.add(`${headerStyles.disableScroll}`)
    }

    closeMenu = () => {
        this.setState({ active: false, toggleIcon: menuIcon })
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
                <nav
                    className={
                        this.state.active ? headerStyles.activeNavbar : ''
                    }
                >
                    {/* <ul className={headerStyles.navList}> */}
                    {/* todo understand why this is undefined in method when 
                    removing here the arrow function */}
                    <ul>
                        <li>
                            <Link
                                className={headerStyles.navItem}
                                activeClassName={headerStyles.activeNavItem}
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={headerStyles.navItem}
                                activeClassName={headerStyles.activeNavItem}
                                to="/one-of"
                            >
                                Industrial One Of
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                className={headerStyles.navItem}
                                activeClassName={headerStyles.activeNavItem}
                                to="/exhibitions"
                            >
                                Exhibitions
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                className={headerStyles.navItem}
                                activeClassName={headerStyles.activeNavItem}
                                to="/press"
                            >
                                Press
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                className={headerStyles.navItem}
                                activeClassName={headerStyles.activeNavItem}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li> */}
                    </ul>
                </nav>
                {/* todo understand why this is undefined in method when 
                    removing here the arrow function */}
                <div className={headerStyles.menuToggle}>
                    <img
                        src={this.state.toggleIcon}
                        onClick={this.onToggle}
                        alt=""
                    ></img>
                </div>
            </header>
        )
    }
}

export default Header
