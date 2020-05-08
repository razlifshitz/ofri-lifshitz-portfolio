import React, { useState, useEffect, useCallback } from 'react'
import { navigate } from 'gatsby'
import NavItem from './NavItem'
import style from '../../styles/header.module.scss'
import menuIcon from '../../assets/menu-toggle.png'
import xIcon from '../../assets/menu-toggle-x.png'
import { OPEN_MENU, CLOSE_MENU } from '../../constants/one-of.constants'

const NavBar = ({ items, isNavbarActive, activeItem, onAction }) => {
    /**
     * State
     */
    // internal state
    const [activeParentItem, setActiveParentItem] = useState(null)
    const [mobileDisplay, setMobileDisplay] = useState(null)

    const closeMenu = useCallback(() => {
        onAction(CLOSE_MENU)
    }, [onAction])

    /**
     * Effects
     */

    // modifing class according to whether menu is active/inactive
    useEffect(() => {
        if (isNavbarActive) {
            document.body.classList.add(`${style.disableScroll}`)
        } else {
            document.body.classList.remove(`${style.disableScroll}`)
            setActiveParentItem(null)
        }
    }, [isNavbarActive])

    // if display changed to web and mobile menu was opened --> closes menu
    useEffect(() => {
        const mobileMachMedia = window.matchMedia(
            `(max-width: ${style.mediaLarge})`
        )

        function onScreenSizeChange() {
            setMobileDisplay(mobileMachMedia.matches)
        }

        onScreenSizeChange()
        window.addEventListener('resize', onScreenSizeChange)

        // todo check if can use here mobileDisplay
        if (!mobileMachMedia.matches && isNavbarActive) {
            closeMenu()
        }

        return () => {
            window.removeEventListener('resize', onScreenSizeChange)
        }
    }, [isNavbarActive, closeMenu])

    /**
     * Methods
     */

    function onToggle() {
        isNavbarActive ? closeMenu() : openMenu()
    }

    function openMenu() {
        onAction(OPEN_MENU)
    }

    const onItemClick = item => {
        // Click on parent item - mobile
        if (item.children && mobileDisplay) {
            !activeParentItem || activeParentItem.id !== item.id
                ? setActiveParentItem(item)
                : setActiveParentItem(null)
        } else {
            if (mobileDisplay) {
                closeMenu()
                setTimeout(() => {
                    navigate(item.slug)
                }, 500)
            } else {
                navigate(item.slug)
            }
        }
    }

    return (
        <div>
            <nav
                className={
                    isNavbarActive ? style.activeNavbar : style.inactiveNavbar
                }
            >
                <ul>
                    {items.map(item => (
                        <NavItem
                            key={item.id}
                            item={item}
                            activeItem={activeItem}
                            isActiveParent={
                                activeParentItem &&
                                item.id === activeParentItem.id
                            }
                            onItemClick={onItemClick}
                        ></NavItem>
                    ))}
                </ul>
            </nav>
            {/* todo understand why this is undefined in method when 
                    removing here the arrow function */}
            <div
                className={`${style.menuToggle} ${
                    isNavbarActive ? style.activeNavbar : style.inactiveNavbar
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
