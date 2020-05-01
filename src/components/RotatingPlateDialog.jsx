import React from 'react'
import style from '../styles/contact.module.scss'
import Carousel from './Carousel'

class RotatingPlateDialog extends React.Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef()
        this.formRef = React.createRef()

        this.state = {
            isMobileView: null,
        }
    }

    componentDidMount() {
        this.setIsMobileView()
        window.addEventListener('resize', this.setIsMobileView)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setIsMobileView)
    }

    setIsMobileView = () => {
        const result = window.matchMedia(
            `(max-width: ${style.contactMobileDisplay}`
        )
        this.setState({ ...this.state, isMobileView: result.matches })
    }

    /**
     * Jsx getters
     */

    getImageJsx = () => {
        return (
            <div className={style.plateWrapper}>
                <Carousel
                    aspectRatio={{ width: 1, height: 1 }}
                    activeIndex={this.props.activeIndex}
                    transitionLength={this.props.transitionLength}
                    images={this.props.images}
                    wrapperClass={style.rotatingImage}
                ></Carousel>
            </div>
        )
    }

    getContentJsx = () => {
        if (this.state.isMobileView === null) {
            return null
        } else if (this.state.isMobileView) {
            return (
                <div>
                    {this.getImageJsx()}
                    {this.props.children}
                </div>
            )
        } else {
            return this.props.children
        }
    }

    render() {
        return (
            <div ref={this.wrapperRef} className={style.wrapper}>
                <div ref={this.formRef} className={style.form}>
                    <h1 className={style.title}>{this.props.title}</h1>
                    {this.getContentJsx()}
                </div>
                {!this.state.isMobileView ? this.getImageJsx() : null}
            </div>
        )
    }
}

export default RotatingPlateDialog

// export default props => (
//     <StaticQuery
//         query={}
//         render={data => <RotatingPlateDialog data={data} {...props} />}
//     />
// )
