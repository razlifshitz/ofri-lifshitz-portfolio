import React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/navigation/NavBar'
import { OPEN_MENU } from '../constants/one-of.constants'

// style
import headerStyles from '../styles/header.module.scss'
import logo from '../assets/logos/logo 18.3.20.png'

const items = [
    {
        id: 'ABOUT',
        name: 'About',
        slug: '/about',
    },
    {
        id: 'INDUSTRIAL_ONE_OF',
        name: 'Industrial One Of',
        slug: '/one-of',
        children: [
            {
                id: 'STORT_BEHIND',
                name: 'The Story Behind',
                slug: '/one-of#story_behind',
            },
            {
                id: 'INDUSTRIAL_ONE_OF_1_0',
                name: '1.0',
                slug: '/one-of#ioo_1_0',
            },
            {
                id: 'INDUSTRIAL_ONE_OF_2_0',
                name: '2.0',
                slug: '/one-of#ioo_2_0',
            },
            {
                id: 'INDUSTRIAL_ONE_OF_3_0',
                name: '3.0',
                slug: '/one-of#ioo_3_0',
            },
            {
                id: 'INDUSTRIAL_ONE_OF_1_0_SPECIAL',
                name: 'Jerusalem Special Edition',
                slug: '/one-of#ioo_1_0_special',
            },
        ],
    },
    {
        id: 'PRESS',
        name: 'Press',
        slug: '/press',
    },
    {
        id: 'CONTACT',
        name: 'Contact',
        slug: '/contact',
    },
]

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavbarActive: false,
        }
    }

    onNavbarAction = action => {
        this.dispatchMenuAction(action === OPEN_MENU)
    }

    dispatchMenuAction = value => {
        this.setState({ isNavbarActive: value })
    }

    render() {
        return (
            // <header className={headerStyles.Header}>
            <header>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <img
                            src={logo}
                            onClick={() => this.dispatchMenuAction(false)}
                        ></img>
                    </Link>
                </div>
                <NavBar
                    items={items}
                    activeItem={this.props.activeItem}
                    isNavbarActive={this.state.isNavbarActive}
                    onAction={this.onNavbarAction}
                ></NavBar>
            </header>
        )
    }
}

export default Header
