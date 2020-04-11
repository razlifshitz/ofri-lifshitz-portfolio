import React from 'react'
import { Link } from 'gatsby'
import style from '../styles/one-of.module.scss'

function TableOfContents({ contentsList, activeItem, showTableOfContents }) {
    const isActiveItem = item => {
        return activeItem && activeItem.id === item.id
    }

    return (
        <div
            className={`${style.tableOfContents} ${
                showTableOfContents ? style.active : ''
            }`}
        >
            <h1
                className={`${style.tableOfContentsTitle} ${
                    showTableOfContents ? style.active : ''
                }`}
            >
                Industrial One Of
            </h1>
            <ul>
                {contentsList.map(item => (
                    <li key={item.id}>
                        <Link
                            className={
                                isActiveItem(item) ? style.activeItem : ''
                            }
                            to={item.slug}
                            state={{ activeItem: contentsList[0] }}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableOfContents
