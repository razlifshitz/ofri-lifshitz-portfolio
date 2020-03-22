import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import NavItem from './NavItem'
import style from '../../styles/header.module.scss'
import menuIcon from '../../assets/menu-toggle.png'
import xIcon from '../../assets/menu-toggle-x.png'

const NavBar = ({ items, activeItem }) => {
    const mobileMachMedia = window.matchMedia(`(max-width: ${style.mediaLarge}`)

    // active menu
    const [active, setActive] = useState(false)
    useEffect(() => {
        // modifing class according to whether menu is active/inactive
        active
            ? document.body.classList.add(`${style.disableScroll}`)
            : document.body.classList.remove(`${style.disableScroll}`)
    }, [active])

    // is mobile display
    const [mobileDisplay, setmobileDisplay] = useState(mobileMachMedia.matches)
    useEffect(() => {
        function onScreenSizeChange() {
            setmobileDisplay(mobileMachMedia.matches)
        }

        window.addEventListener('resize', onScreenSizeChange)

        // if display changed to web and mobile menu was opened --> closes menu
        if (!mobileDisplay && active) {
            closeMenu()
        }

        return () => {
            window.removeEventListener('resize', onScreenSizeChange)
        }
    }, [mobileDisplay])

    function onToggle() {
        active ? closeMenu() : openMenu()
    }

    function openMenu() {
        setActive(true)
    }

    function closeMenu() {
        setActive(false)
    }

    const onItemClick = item => {
        navigate(item.slug, { state: { activeItem: item } })
        closeMenu()
    }

    return (
        <div>
            <nav className={active ? style.activeNavbar : style.inactiveNavbar}>
                <ul>
                    {items.map(item => (
                        <NavItem
                            key={item.id}
                            item={item}
                            isActive={activeItem && item.id === activeItem.id}
                            onItemClick={onItemClick}
                        ></NavItem>
                    ))}
                </ul>
            </nav>
            {/* todo understand why this is undefined in method when 
                    removing here the arrow function */}
            <div
                className={`${style.menuToggle} ${
                    active ? style.activeNavbar : style.inactiveNavbar
                }`}
            >
                <img
                    className={style.menuIcon}
                    src={menuIcon}
                    onClick={onToggle}
                    alt=""
                ></img>
                <img
                    className={style.xIcon}
                    src={xIcon}
                    onClick={onToggle}
                    alt=""
                ></img>
            </div>
        </div>
    )
}

export default NavBar
