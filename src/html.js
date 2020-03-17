import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
                    rel="stylesheet"
                ></link>
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {/* hidden form */}
                <form
                    name="contact"
                    netlify
                    netlify-honeypot="bot-field"
                    hidden
                >
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="text" name="subject" />
                    <input type="text" name="message" />
                    <textarea name="message"></textarea>
                </form>

                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
