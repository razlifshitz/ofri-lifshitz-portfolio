import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import NavItem from './NavItem'
import style from '../../styles/header.module.scss'
import menuIcon from '../../assets/menu-toggle.png'
import xIcon from '../../assets/menu-toggle-x.png'

const NavBar = ({ items, activeItem }) => {
    const mobileMachMedia = window.matchMedia(`(max-width: ${style.mediaLarge}`)

    // active menu
    const [isNavbarActive, setIsNavbarActive] = useState(false)
    useEffect(() => {
        // modifing class according to whether menu is active/inactive
        isNavbarActive
            ? document.body.classList.add(`${style.disableScroll}`)
            : document.body.classList.remove(`${style.disableScroll}`)
    }, [isNavbarActive])

    // active parent item
    const [activeParentItem, setActiveParentItem] = useState(null)

    // is mobile display
    const [mobileDisplay, setmobileDisplay] = useState(mobileMachMedia.matches)
    useEffect(() => {
        function onScreenSizeChange() {
            setmobileDisplay(mobileMachMedia.matches)
        }

        window.addEventListener('resize', onScreenSizeChange)

        // if display changed to web and mobile menu was opened --> closes menu
        if (!mobileDisplay && isNavbarActive) {
            closeMenu()
        }

        return () => {
            window.removeEventListener('resize', onScreenSizeChange)
        }
    }, [mobileDisplay])

    function onToggle() {
        isNavbarActive ? closeMenu() : openMenu()
    }

    function openMenu() {
        setIsNavbarActive(true)
    }

    function closeMenu() {
        setIsNavbarActive(false)
    }

    const onItemClick = item => {
        if (item.children /*&& mobileDisplay*/) {
            !activeParentItem || activeParentItem.id != item.id
                ? setActiveParentItem(item)
                : setActiveParentItem(null)
        } else {
            navigate(item.slug, { state: { activeItem: item } })
            closeMenu()
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
