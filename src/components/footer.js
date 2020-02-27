import React from 'react'

const Footer = () => {
    return (
        <div
            style={{
                paddingTop: '2rem',
                textAlign: 'center',
                color: '#3d3d3d',
            }}
        >
            <span style={{ fontFamily: 'Dosis' }}>
                © 2020 by Raz Lifshitz. All rights reserved.
            </span>
            <br />
            <div
                style={{
                    paddingTop: '0.3rem',
                    verticalAlign: 'top',
                    display: 'inline-block',
                    textDecoration: 'none',
                }}
            >
                <a
                    href="https://www.instagram.com/ofrilifshitz_design/"
                    style={{ color: 'inherit' }}
                >
                    <i class="instagram icon"></i>
                </a>
                <a
                    href="mailto:ofri.lif@gmail.com"
                    style={{ color: 'inherit' }}
                >
                    {' '}
                    <i class="envelope icon"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
