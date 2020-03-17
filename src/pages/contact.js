import React from 'react'
import style from '../styles/contact.module.scss'
import Layout from '../components/layout'
import wedgwood from '../assets/plates/wedgwood1.png'

class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contentHeight: null }
        this.wrapperRef = React.createRef()
        this.formRef = React.createRef()
    }

    componentDidMount() {
        const contentHeight = this.wrapperRef.current.clientHeight
        const formHeight = this.formRef.current.clientHeight
        this.setState({ photoWrapperHeight: formHeight + 'px' })
        let x = formHeight + 'px'
        console.log(x)
    }

    render() {
        return (
            <Layout>
                <div ref={this.wrapperRef} className={style.wrapper}>
                    <div ref={this.formRef} className={style.form}>
                        <form
                            name="contact"
                            autoComplete="off"
                            netlify
                            netlify-honeypot="bot-field"
                        >
                            <h1 className={style.title}>Let's Talk!</h1>
                            <input
                                style={{ display: 'none' }}
                                name="bot-field"
                            />
                            {/* Name */}
                            <input type="text" name="name" placeholder="Name" />
                            {/* Email */}
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                            />
                            {/* Message */}
                            <textarea
                                type="message"
                                name="message"
                                placeholder="Message"
                            />
                            <span
                                className={`${style.greyLink} ${style.submit}`}
                                type="submit"
                            >
                                Send
                            </span>
                        </form>
                    </div>
                    <div
                        style={
                            {
                                // height: `calc(100vh - 1rem - 110px - ${this.state.photoWrapperHeight})`,
                            }
                        }
                        className={style.plateWrapper}
                    >
                        <img className={style.rotatingImage} src={wedgwood} />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ContactPage
