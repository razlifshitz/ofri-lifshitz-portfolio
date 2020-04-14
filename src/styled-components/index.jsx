import styled from 'styled-components'
import baseStyle from '../styles/base.module.scss'
import { Link } from 'gatsby'

export const GreyLink = styled(Link)`
    color: black;
    font-weight: bold;
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: #6d6e71;
        opacity: 0.6;
    }
    @media (max-width: ${baseStyle.mediaLarge}) {
        cursor: default;
    }
`
