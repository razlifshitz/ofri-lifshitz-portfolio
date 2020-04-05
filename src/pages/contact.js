import React, { useState } from 'react'
// style
import style from '../styles/contact.module.scss'
// components
import Layout from '../components/layout'
import { usePlatesImages } from '../hooks/graphql/usePlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'
// constants
import { getRandIndex, CONTACT } from '../constants/one-of.constants'

function ContactPage() {
    const images = usePlatesImages()
    const [activeIndex, setActiveIndex] = useState(
        getRandImageIndex(images.length, -1)
    )

    function onFieldFocus() {
        setActiveIndex(getRandImageIndex(images.length, activeIndex))
    }

    function getRandImageIndex(limit, activeIndex) {
        let result = getRandIndex(limit)

        while (result === activeIndex) {
            result = getRandIndex(limit)
        }

        return result
    }

    return (
        <Layout activeItem={CONTACT}>
            <RotatingPlateDialog
                title="Let's Talk!"
                images={images}
                activeIndex={activeIndex}
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
                        onFocus={onFieldFocus}
                        required
                    />
                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={style.input}
                        onFocus={onFieldFocus}
                        required
                    />
                    {/* Subject */}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className={style.input}
                        onFocus={onFieldFocus}
                        required
                    />
                    {/* Message */}
                    <textarea
                        type="message"
                        name="message"
                        placeholder="Message"
                        className={style.textarea}
                        onFocus={onFieldFocus}
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

export default ContactPage
