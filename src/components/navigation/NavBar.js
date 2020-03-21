import React from 'react'
import { navigate } from 'gatsby'
import NavItem from './NavItem'
import style from '../../styles/header.module.scss'

const NavBar = ({ items, isNavActive, activeItem }) => {
    const onItemClick = item => {
        navigate(item.slug, { state: { activeItem: item } })
    }

    return (
        <nav
            className={isNavActive ? style.activeNavbar : style.inactiveNavbar}
        >
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
    )
}

export default NavBar
