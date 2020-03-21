import React from 'react'
import style from '../../styles/header.module.scss'

const NavItem = ({ item, isActive, onItemClick }) => {
    return (
        <li>
            <a
                className={`${style.navItem} ${
                    isActive ? style.activeNavItem : ''
                }`}
                onClick={() => onItemClick(item)}
            >
                {item.name}
            </a>
        </li>
    )
}

export default NavItem
