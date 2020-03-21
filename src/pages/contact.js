import React from 'react'

// style
import style from '../styles/contact.module.scss'

// components
import Layout from '../components/layout'
import { withPlatesImages } from '../components/hoc/withPlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'

// constants
import { getRandIndex } from '../constants/one-of.constants'

class ContactPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: this.getRandIndex(props.images.length),
        }
    }

    getRandIndex = limit => {
        let result = getRandIndex(limit)

        if (this.state) {
            while (result === this.state.activeIndex) {
                result = getRandIndex(limit)
            }
        }

        return result
    }

    onFieldFocus = () => {
        this.setState({
            ...this.state,
            activeIndex: this.getRandIndex(this.props.images.length),
        })
    }

    render() {
        return (
            <Layout>
                <RotatingPlateDialog
                    title="Let's Talk!"
                    images={this.props.images}
                    activeIndex={this.state.activeIndex}
                >
                    <form
                        name="contact"
                        method="POST"
                        action="/contact-success/"
                        autoComplete="off"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        {/* hidden netlify field */}
                        <input type="hidden" name="form-name" value="contact" />
                        <input style={{ display: 'none' }} name="bot-field" />

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className={style.input}
                            onFocus={this.onFieldFocus}
                            required
                        />
                        {/* Message */}
                        <textarea
                            type="message"
                            name="message"
                            placeholder="Message"
                            className={style.textarea}
                            onFocus={this.onFieldFocus}
                            required
                            minLength="10"
                        />
                        <button
                            className={`${style.button} ${style.submit}`}
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </RotatingPlateDialog>
            </Layout>
        )
    }
}

export default withPlatesImages(ContactPage)
