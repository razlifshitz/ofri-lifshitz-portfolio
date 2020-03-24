import React, { useState, useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import NavItem from './NavItem'
import style from '../../styles/header.module.scss'
import menuIcon from '../../assets/menu-toggle.png'
import xIcon from '../../assets/menu-toggle-x.png'
import { OPEN_MENU, CLOSE_MENU } from '../../constants/one-of.constants'

const NavBar = props => {
    // constant
    const mobileMachMedia = window.matchMedia(`(max-width: ${style.mediaLarge}`)

    /**
     * State
     */

    // from props
    const [items] = useState([...props.items])
    const [activeItem, setActiveItem] = useState(props.activeItem)
    const [isNavbarActive, setIsNavbarActive] = useState(props.isNavbarActive)

    // internal state
    const [activeParentItem, setActiveParentItem] = useState(null)
    const [mobileDisplay, setmobileDisplay] = useState(mobileMachMedia.matches)

    /**
     * Effects
     */

    // updating state on props change
    useEffect(() => {
        setIsNavbarActive(props.isNavbarActive)
    }, [props.isNavbarActive])

    useEffect(() => {
        setActiveItem(props.activeItem)
    }, [props.activeItem])

    // modifing class according to whether menu is active/inactive
    useEffect(() => {
        isNavbarActive
            ? document.body.classList.add(`${style.disableScroll}`)
            : document.body.classList.remove(`${style.disableScroll}`)

        console.log('state nav: ' + isNavbarActive)
    }, [isNavbarActive])

    // if display changed to web and mobile menu was opened --> closes menu
    useEffect(() => {
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
        props.onAction(OPEN_MENU)
    }

    function closeMenu() {
        setActiveParentItem(null)
        props.onAction(CLOSE_MENU)
    }

    const onItemClick = item => {
        if (item.children && mobileDisplay) {
            !activeParentItem || activeParentItem.id != item.id
                ? setActiveParentItem(item)
                : setActiveParentItem(null)
        } else if (activeItem && item.id === activeItem.id) {
            closeMenu()
        } else {
            // fixme: pass isNavbarActive = false to location state
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
