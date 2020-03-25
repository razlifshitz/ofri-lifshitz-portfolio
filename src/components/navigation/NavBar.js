import React, { useState, useEffect, useRef } from 'react'
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
    const [mobileDisplay, setmobileDisplay] = useState(null)

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
            `(max-width: ${style.mediaLarge}`
        )

        function onScreenSizeChange() {
            setmobileDisplay(mobileMachMedia.matches)
        }

        window.addEventListener('resize', onScreenSizeChange)

        if (!mobileDisplay && isNavbarActive) {
            closeMenu()
        }

        return () => {
            window.removeEventListener('resize', onScreenSizeChange)
        }
    }, [mobileDisplay])

    /**
     * Methods
     */

    function onToggle() {
        isNavbarActive ? closeMenu() : openMenu()
    }

    function openMenu() {
        onAction(OPEN_MENU)
    }

    function closeMenu() {
        onAction(CLOSE_MENU)
    }

    const onItemClick = item => {
        // Click on parent item - mobile
        if (item.children && mobileDisplay) {
            !activeParentItem || activeParentItem.id != item.id
                ? setActiveParentItem(item)
                : setActiveParentItem(null)
        }
        // Click on current active item
        else if (activeItem && item.id === activeItem.id) {
            closeMenu()
        }
        // move to another child of same parent OR moved from parent
        // to one of his children (can happen only if starting from
        // web view and transforming to mobile in the middle)
        else if (
            activeItem &&
            (item.parentId === activeItem.id ||
                item.parentId === activeItem.parentId)
        ) {
            // we should close memu ourself becuse navigation to other
            // anchor on same page doen't render NavBar Component
            // TODO: think about a better mechanizem (redux)
            closeMenu()
            navigate(item.slug, { state: { activeItem: item } })
        } else {
            navigate(item.slug, { state: { activeItem: item } })
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
