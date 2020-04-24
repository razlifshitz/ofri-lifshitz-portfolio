import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import NavBar from './navigation/NavBar'
import { OPEN_MENU, getMenuItemsList } from '../constants/one-of.constants'

// style
import headerStyles from '../styles/header.module.scss'
import logo from '../assets/logos/logo 18.3.20.png'

const items = getMenuItemsList()

function Header({ activeItem }) {
    const [isNavbarActive, setIsNavbarActive] = useState(false)

    const onNavbarAction = useCallback(action => {
        dispatchMenuAction(action === OPEN_MENU)
    }, [])

    function dispatchMenuAction(value) {
        setIsNavbarActive(value)
    }

    return (
        // <header className={headerStyles.Header}>
        <header>
            <div className={headerStyles.logo}>
                <Link to="/">
                    <img
                        src={logo}
                        onClick={() => dispatchMenuAction(false)}
                        alt="Ofri Lifshitz Design Logo"
                    ></img>
                </Link>
            </div>
            <NavBar
                items={items}
                activeItem={activeItem}
                isNavbarActive={isNavbarActive}
                onAction={onNavbarAction}
            ></NavBar>
        </header>
    )
}

export default Header
