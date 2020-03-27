import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import style from '../styles/one-of.module.scss'

function TableOfContents(props) {
    const [activeContent, setActiveContent] = useState()

    useEffect(() => {
        if (!props.contentsList) return

        // searching for active content by the scroll location and contents
        // heights
        for (let i = 0; i < props.contentsList.length; i++) {
            const sectionHeight = props.contentsList[i].height
            const nextSectionHeight =
                props.contentsList[i + 1] && props.contentsList[i + 1].height
            if (
                props.scroll + 100 > sectionHeight &&
                (!nextSectionHeight || props.scroll < nextSectionHeight)
            ) {
                setActiveContent(props.contentsList[i])
            }
        }
    }, [props.scroll])

    const wasScrolled = () => {
        return props.scroll > 80
    }

    const isActiveItem = item => {
        return activeContent && activeContent.id === item.id
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
