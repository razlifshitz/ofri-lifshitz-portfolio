import React from 'react'
import style from '../../styles/header.module.scss'

const NavItem = ({ item, activeItem, isActiveParent, onItemClick }) => {
    function getChildrenJsx() {
        return (
            <ul>
                {item.children.map(childItem => (
                    <NavItem
                        key={childItem.id}
                        item={childItem}
                        activeItem={activeItem}
                        onItemClick={onItemClick}
                    ></NavItem>
                ))}
            </ul>
        )
    }

    const isActive = activeItem && item.id === activeItem.id
    return (
        <li className={isActiveParent ? style.activeParentItem : ''}>
            <a
                className={`${isActive ? style.activeNavItem : ''} ${
                    item.children ? style.subMenu : ''
                }`}
                onClick={() => onItemClick(item)}
            >
                {item.name}
            </a>
            {item.children ? getChildrenJsx() : null}
        </li>
    )

    // return (
    //     <BaseNavItem
    //         key={item.id}
    //         item={item}
    //         isActive={activeItem && item.id === activeItem.id}
    //         onItemClick={onItemClick}
    //     >
    //         {item.children ? getChildrenJsx() : null}
    //     </BaseNavItem>
    // )
}

// const BaseNavItem = ({ item, isActive, onItemClick, children }) => {
//     return (
//         <li>
//             <a
//                 className={isActive ? style.activeNavItem : ''}
//                 onClick={() => onItemClick(item)}
//             >
//                 {item.name}
//             </a>
//             {children ? children : null}
//         </li>
//     )
// }

export default NavItem
