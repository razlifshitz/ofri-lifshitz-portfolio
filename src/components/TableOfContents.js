import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import style from '../styles/one-of.module.scss'
import { SCROLL_SHOW_TABLE_OF_CONTENTS } from '../constants/one-of.constants'

function TableOfContents(props) {
    const wasScrolled = () => {
        return props.scroll > SCROLL_SHOW_TABLE_OF_CONTENTS
    }

    const isActiveItem = item => {
        return props.activeSection && props.activeSection.id === item.id
    }

    return !props.contentsList ? null : (
        <div
            className={`${style.tableOfContents} ${
                wasScrolled() ? style.active : ''
            }`}
        >
            <h1
                className={`${style.tableOfContentsTitle} ${
                    wasScrolled() ? style.active : ''
                }`}
            >
                Industrial One Of
            </h1>
            <ul>
                {props.contentsList.map(item => (
                    <li key={item.id}>
                        <Link
                            className={
                                isActiveItem(item) ? style.activeItem : ''
                            }
                            to={item.slug}
                            state={{ activeItem: props.contentsList[0] }}
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
