import React from 'react'
import { Link } from 'gatsby'
import NavBar from './navigation/NavBar'
import { OPEN_MENU, getMenuItemsList } from '../constants/one-of.constants'

// style
import headerStyles from '../styles/header.module.scss'
import logo from '../assets/logos/logo 18.3.20.png'

const items = getMenuItemsList()
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
