import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import style from '../styles/one-of.module.scss'

function TableOfContents(props) {
    const list = [
        {
            id: 'INDUSTRIAL_ONE_OF',
            name: 'The Story Behind',
            slug: '/one-of',
            parentId: 'INDUSTRIAL_ONE_OF',
        },
        {
            id: 'INDUSTRIAL_ONE_OF_1_0',
            name: 'v1.0',
            slug: '/one-of#ioo_1_0',
            parentId: 'INDUSTRIAL_ONE_OF',
        },
        {
            id: 'INDUSTRIAL_ONE_OF_2_0',
            name: 'v2.0',
            slug: '/one-of#ioo_2_0',
            parentId: 'INDUSTRIAL_ONE_OF',
        },
        {
            id: 'INDUSTRIAL_ONE_OF_3_0',
            name: 'v3.0',
            slug: '/one-of#ioo_3_0',
            parentId: 'INDUSTRIAL_ONE_OF',
        },
        {
            id: 'INDUSTRIAL_ONE_OF_1_0_SPECIAL',
            name: 'vJeru.002',
            slug: '/one-of#ioo_1_0_special',
            parentId: 'INDUSTRIAL_ONE_OF',
        },
    ]

    const [activeItem, setActiveItem] = useState()

    const wasScrolled = () => {
        // console.log(props.sectionsHeights && props.sectionsHeights[0])
        // console.log(props.sectionsHeights && props.sectionsHeights[1])
        // console.log(props.sectionsHeights && props.sectionsHeights[2])
        // console.log(props.sectionsHeights && props.sectionsHeights[3])
        // console.log(props.sectionsHeights && props.sectionsHeights[4])
        // console.log('scroll: ' + props.scroll)

        return props.scroll > 80
    }

    useEffect(() => {
        if (!props.sectionsHeights) return

        for (let i = 0; i < props.sectionsHeights.length; i++) {
            const sectionHeight = props.sectionsHeights[i]
            const nextSectionHeight = props.sectionsHeights[i + 1]
            if (
                props.scroll + 100 > sectionHeight &&
                (!nextSectionHeight || props.scroll < nextSectionHeight)
            ) {
                setActiveItem(list[i])
            }
        }
    }, [props.scroll])

    const isActiveItem = item => {
        // console.log('item: ' + item.id)
        // console.log('activeItem: ' + (activeItem && activeItem.id))
        // console.log('result: ' + (activeItem && activeItem.id === item.id))
        return activeItem && activeItem.id === item.id
    }

    return (
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
                {list.map(item => (
                    <li key={item.id}>
                        <Link
                            className={
                                isActiveItem(item) ? style.activeItem : ''
                            }
                            to={item.slug}
                            state={{ activeItem: list[0] }}
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
