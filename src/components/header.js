import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

import menuIcon from '../assets/menu-toggle.png'

const Header = () => {
    const [state, setState] = React.useState({
        active: false,
    })

    const onToggle = () => {
        setState({ ...state, active: !state.active })
    }

    return (
        <header>
            <div className={headerStyles.logo}>Ofri Lifshitz</div>
            <nav className={state.active ? headerStyles.activeNavbar : ''}>
                <ul>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/"
                        >
                            About
                        </Link>
                    </li>
                    <li className={headerStyles.subMenu}>
                        <span>Industrial One Of</span>
                        <ul>
                            <li>
                                <Link
                                    className={headerStyles.navItem}
                                    activeClassName={headerStyles.activeNavItem}
                                    to="/one-of/v1.0"
                                >
                                    Industrial One Of v1.0
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={headerStyles.navItem}
                                    activeClassName={headerStyles.activeNavItem}
                                    to="/one-of/v2.0"
                                >
                                    Industrial One Of v2.0
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={headerStyles.navItem}
                                    activeClassName={headerStyles.activeNavItem}
                                    to="/one-of/v3.0"
                                >
                                    Industrial One Of v3.0
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/exhibitions"
                        >
                            Exhibitions
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/press"
                        >
                            Press
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={headerStyles.menuToggle} onClick={onToggle}>
                <img src={menuIcon} alt="toggle menu"></img>
            </div>
        </header>
    )
}

export default Header
