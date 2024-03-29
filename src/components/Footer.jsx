import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Footer = () => {
    const {
        facebook: {
            childImageSharp: { fixed: facebook },
        },
        instagram: {
            childImageSharp: { fixed: instagram },
        },
    } = useStaticQuery(query)

    return (
        <Wrapper
            style={{
                paddingTop: '2rem',
                textAlign: 'center',
                color: '#3d3d3d',
            }}
        >
            {/* Divider */}
            {/* <div
                style={{
                    paddingBottom: '0.5rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    marginTop: '2rem',
                }}
            ></div> */}
            <span
                style={{
                    fontSize: '0.6rem',
                }}
            >
                © 2020 by Raz Lifshitz. All rights reserved.
            </span>
            <br />
            <div
                style={{
                    paddingTop: '0.4rem',
                    verticalAlign: 'top',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontSize: '1.3rem',
                }}
            >
                <a
                    href="https://www.facebook.com/ofri.lifshitz"
                    style={{ margin: '7px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon fixed={facebook}></Icon>
                </a>
                <a
                    href="https://www.instagram.com/ofrilifshitz_design/"
                    style={{ color: 'inherit' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon fixed={instagram}></Icon>
                </a>
                {/* <a
                    href="mailto:ofri.lif@gmail.com"
                    style={{ color: 'inherit' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="envelope icon"></i>
                </a> */}
            </div>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    paddingtop: '2rem';
    textalign: 'center';
    color: '#3d3d3d';
    animation: fade-in 1s;
`

const Icon = styled(Img)``

const query = graphql`
    query {
        facebook: file(
            relativePath: { eq: "icons/facebook_512x512_square.png" }
        ) {
            childImageSharp {
                fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        instagram: file(relativePath: { eq: "icons/instagram_512x512.png" }) {
            childImageSharp {
                fixed(width: 24, height: 24) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
    }
`
