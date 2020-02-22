import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

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
            <div className={headerStyles.logo}>Ofri Lifshitz</div>
            {/* <Link to="/" className={headerStyles.title}>
                <h1> Ofri Lifshitz</h1>
                <h3>Industrial Designer</h3>
            </Link> */}
            <nav className={state.active ? headerStyles.activeNavbar : ''}>
                {/* <ul className={headerStyles.navList}> */}
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
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/one-of"
                        >
                            Industrial One Of
                        </Link>
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
                <img src={menuIcon}></img>
            </div>
        </header>
    )
}

export default Header
