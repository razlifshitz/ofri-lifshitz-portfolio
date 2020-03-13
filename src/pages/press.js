import React from 'react'
import NoStretchImage from '../components/noStretchImage'

import style from '../styles/press.module.scss'

import Layout from '../components/layout'

const PressPage = ({ data }) => {
    // images
    const designZoom = data.designZoom.childImageSharp.fluid
    const coolHunting = data.coolHunting.childImageSharp.fluid
    const PD = data.PD.childImageSharp.fluid
    const DM = data.DM.childImageSharp.fluid
    const culaizuv = data.culaizuv.childImageSharp.fluid
    const portfolioSrc = data.portfolio.childImageSharp.fluid

    // need special styles for this logo
    const portfolio = {
        style: style.portfolio,
        magazine: 'portfolio',
        url: '',
        logo: portfolioSrc,
    }

    const pressList = [
        {
            magazine: 'Design Milk',
            title:
                'At “Industrial One Of,” Machines Leave Their Individual Mark on Pottery',
            author: 'Keshia Badalge',
            url:
                'https://design-milk.com/at-industrial-one-of-machines-leave-their-individual-mark-on-pottery/',
            logo: DM,
        },
        {
            magazine: 'Cool Hunting',
            title: 'ONE OF A KIND MACHINE-MADE CERAMICS',
            url:
                'https://coolhunting.com/tech/one-of-a-kind-machine-made-ceramics/',
            logo: coolHunting,
        },

        {
            magazine: 'Puro Diseno',
            title: 'Cerámica modelada a máquina',
            author: 'Mara Derni',
            url:
                'https://www.purodiseno.lat/a-escala/piezas-de-ceramica-tecnologia-hecha-a-mano/',
            logo: PD,
        },
        {
            magazine: 'Design Zoom',
            title: 'עבודת היד של המכונה',
            author: 'Sigal Namir',
            url:
                'https://dezignzoom.co.il/%d7%a2%d7%91%d7%95%d7%93%d7%aa-%d7%94%d7%99%d7%93-%d7%a9%d7%9c-%d7%94%d7%9e%d7%9b%d7%95%d7%a0%d7%94-%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d-2017/',
            logo: designZoom,
        },
        {
            magazine: 'culaizuv',
            url:
                'http://design.hit.ac.il/blog/%d7%94%d7%90%d7%93%d7%9d-%d7%94%d7%9e%d7%9b%d7%95%d7%a0%d7%94-%d7%95%d7%94%d7%9e%d7%93%d7%99%d7%94-%d7%94%d7%93%d7%99%d7%92%d7%99%d7%98%d7%9c%d7%99%d7%aa/',
            logo: culaizuv,
        },
    ]

    return (
        <Layout>
            <div className={style.container}>
                {pressList.map(pressData => (
                    <div className={style.card} key={pressData.url}>
                        <a
                            href={pressData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NoStretchImage
                                style={{ marginBottom: '1.52rem' }}
                                fluid={pressData.logo}
                            ></NoStretchImage>
                        </a>
                    </div>
                ))}
                <div className={portfolio.style}>
                    <a
                        href={portfolio.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <NoStretchImage
                            style={{ marginBottom: '1.52rem' }}
                            fluid={portfolio.logo}
                        ></NoStretchImage>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default PressPage

export const query = graphql`
    query {
        designZoom: file(relativePath: { eq: "press/designZoom.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        coolHunting: file(relativePath: { eq: "press/coolHunting.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        PD: file(relativePath: { eq: "press/PD.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        DM: file(relativePath: { eq: "press/DM.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        culaizuv: file(relativePath: { eq: "press/culaizuv.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        portfolio: file(relativePath: { eq: "press/portfolio.png" }) {
            childImageSharp {
                fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`
