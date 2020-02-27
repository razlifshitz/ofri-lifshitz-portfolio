import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

import menuIcon from '../assets/menu-toggle.png'

const Header = () => {
    const [state, setState] = React.useState({
        active: false,
    })

    // const toggleDrawer = open => {
    //     // const toggleDrawer = (side, open) => event => {
    //     // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     //   return;
    //     // }

    //     setState({ ...state, active: open })
    // }

    const onToggle = () => {
        setState({ ...state, active: !state.active })
    }

    return (
        // <header className={headerStyles.Header}>
        <header>
            <div className={headerStyles.logo}>
                <Link to="/">Ofri Lifshitz</Link>
            </div>
            <nav
                className={state.active ? headerStyles.activeNavbar : ''}
                onClick={onToggle}
            >
                {/* <ul className={headerStyles.navList}> */}
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
            <div className={headerStyles.menuToggle} onClick={onToggle}>
                <img src={menuIcon} alt="toggle menu"></img>
            </div>
        </header>
    )
}

export default Header
