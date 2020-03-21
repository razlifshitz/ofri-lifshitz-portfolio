import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import style from '../styles/carousel.module.scss'
import NoStretchImage from './noStretchImage'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        // Interval
        if (this.props.interval) {
            this.intervalKey = setInterval(this.next, this.props.interval)
        }

        // classes from parent
        this.wrapperClass = this.props.wrapperClass

        this.state = {
            activeIndex: this.props.activeIndex ? this.props.activeIndex : 0,
            images: props.images,
        }
    }

    componentDidMount() {
        this.onImageChange(this.state.activeIndex)
    }

    componentDidUpdate(prevProps) {
        // if receiving new active index from parent
        if (this.props.activeIndex !== prevProps.activeIndex) {
            this.setState({
                ...this.state,
                activeIndex: this.props.activeIndex,
            })
        }
    }

    componentWillUnmount() {
        if (this.intervalKey) {
            clearInterval(this.intervalKey)
        }
    }

    next = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === this.state.images.length - 1 ? 0 : activeIndex + 1

        this.setState({ ...this.state, activeIndex: newIndex })

        this.onImageChange(newIndex)
    }

    previous = () => {
        const { activeIndex } = this.state
        const newIndex =
            activeIndex === 0 ? this.state.images.length - 1 : activeIndex - 1

        this.setState({ ...this.state, activeIndex: newIndex })

        this.onImageChange(newIndex)
    }

    /**
     * Updating dominant color
     */
    onImageChange = newIndex => {
        if (this.props.onImageChange) {
            this.props.onImageChange(this.state.images[newIndex].dominantColor)
        }
    }

    /**
     * Getting Image JSX
     */
    getImageJsx = (image, index) => {
        return index === this.state.activeIndex ? (
            <div
                key={index}
                style={{ display: 'block' }}
                className={style.mySlides + ' ' + style.fade}
            >
                <NoStretchImage
                    fluid={image.src}
                    className={this.wrapperClass}
                    imgStyle={{ width: '100%' }}
                ></NoStretchImage>
            </div>
        ) : (
            <div
                key={index}
                style={{ display: 'none' }}
                className={style.mySlides + ' ' + style.fade}
            >
                <NoStretchImage
                    fluid={image.src}
                    imgStyle={{ width: '100%' }}
                    loading="eager"
                ></NoStretchImage>
            </div>
        )
    }

    render() {
        return (
            <div className={style.slideshowContainer}>
                {this.state.images.map((image, index) =>
                    this.getImageJsx(image, index)
                )}
                {/* <button onClick={this.next}>Next</button>
                <button onClick={this.previous}>Previous</button> */}
            </div>
        )
    }
}
export default Carousel

// export default props => (
//     <StaticQuery
//         query={}
//         render={data => <Carousel data={data} {...props} />}
//     />
// )
