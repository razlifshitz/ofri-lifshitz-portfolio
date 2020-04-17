import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// style
import style from '../styles/press.module.scss'
// components
import Layout from '../components/Layout'
import NoStretchImage from '../components/NoStretchImage'
//constants
import { PRESS } from '../constants/one-of.constants'
// import portfolioSrc from '../assets/logos/portfolio.svg'

const PressPage = ({ data }) => {
    // images
    const designZoom = data.designZoom.childImageSharp.fluid
    const coolHunting = data.coolHunting.childImageSharp.fluid
    const PD = data.PD.childImageSharp.fluid
    const DM = data.DM.childImageSharp.fluid
    const culaizuv = data.culaizuv.childImageSharp.fluid
    const portfolioSrc = data.portfolio.childImageSharp.fluid

    const columnA = [
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
            magazine: 'Design Zoom',
            title: 'עבודת היד של המכונה',
            author: 'Sigal Namir',
            url:
                'https://dezignzoom.co.il/%d7%a2%d7%91%d7%95%d7%93%d7%aa-%d7%94%d7%99%d7%93-%d7%a9%d7%9c-%d7%94%d7%9e%d7%9b%d7%95%d7%a0%d7%94-%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d-2017/',
            logo: designZoom,
        },
    ]
    const columnB = [
        {
            magazine: 'Cool Hunting',
            title: 'ONE OF A KIND MACHINE-MADE CERAMICS',
            url:
                'https://coolhunting.com/tech/one-of-a-kind-machine-made-ceramics/',
            logo: coolHunting,
        },
        {
            magazine: 'culaizuv',
            url:
                'http://design.hit.ac.il/blog/%d7%94%d7%90%d7%93%d7%9d-%d7%94%d7%9e%d7%9b%d7%95%d7%a0%d7%94-%d7%95%d7%94%d7%9e%d7%93%d7%99%d7%94-%d7%94%d7%93%d7%99%d7%92%d7%99%d7%98%d7%9c%d7%99%d7%aa/',
            logo: culaizuv,
        },
    ]
    const columnC = [
        {
            magazine: 'Puro Diseno',
            title: 'Cerámica modelada a máquina',
            author: 'Mara Derni',
            url:
                'https://www.purodiseno.lat/a-escala/piezas-de-ceramica-tecnologia-hecha-a-mano/',
            logo: PD,
        },
        {
            magazine: 'portfolio',
            url: 'https://www.prtfl.co.il/archives/126582',
            logo: portfolioSrc,
        },
    ]
    const pressList = [columnA, columnB, columnC]

    function getColumnJsx(pressList) {
        return (
            <PressColumn>
                {pressList.map(pressItem => {
                    return (
                        <ImageCard
                            key={pressItem.url}
                            logo={pressItem.logo}
                            url={pressItem.url}
                        ></ImageCard>
                    )
                })}
            </PressColumn>
        )
    }

    return (
        <Layout activeItem={PRESS}>
            <Wrapper>
                {pressList.map(pressColumn => {
                    return getColumnJsx(pressColumn)
                })}
            </Wrapper>
        </Layout>
    )
}

function ImageCard({ logo, url }) {
    return (
        <PressItem>
            <PressLink href={url}>
                <PressImage fluid={logo}></PressImage>
            </PressLink>
        </PressItem>
    )
}

// function ImageCard({ logo, url }) {
//     const imageRef = useRef()
//     const [spans, setSpans] = useState()

//     function onLoad() {
//         setSpans(Math.ceil(imageRef.current.clientHeight / 10 + 1))
//     }

//     return (
//         <PressImage
//             ref={imageRef}
//             spans={spans}
//             fluid={logo}
//             onLoad={onLoad}
//         ></PressImage>
//     )
// }

export default PressPage

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
`

const PressColumn = styled.div`
    flex: 33%;
    max-width: 33%;
    padding: 0 10px;
`

const PressItem = styled.div`
    width: 190px;
    height: 150px;
    // margin: 0 auto;
`

const PressLink = styled.a.attrs(props => ({
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.href,
}))``

const PressImage = styled(NoStretchImage)`
    // margin-top: 1.52rem !important;
    // margin: auto 0 !important;
    // vertical-align: middle !important;
    // width: 100% !important;
`

// const Wrapper = styled.div`
//     // width: 750px;
//     // margin: 0 auto;
// `

// const PressList = styled.div`
//     // margin-left: 0;
//     // list-style-type: none;

//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(100px, 180px));
//     grid-gap: 0 3rem;
//     grid-auto-rows: 150px;
//     // justify-items: center;
//     // height: 100%;
// `

// const PressItem = styled.div`
//     // height: 100%;
//     margin: auto 0;
//     // align-self: center;
//     // justify-self: center;
//     // grid-row-end: span 2;
// `

// const PressLink = styled.a.attrs(props => ({
//     target: '_blank',
//     rel: 'noopener noreferrer',
//     href: props.href,
// }))``

// const PressImage = styled(NoStretchImage)`
//     // margin-bottom: 1.52rem !important;
//     // grid-row-end: ${props => 'span ' + props.spans};
// `

export const query = graphql`
    query {
        designZoom: file(relativePath: { eq: "press/designZoom.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        coolHunting: file(relativePath: { eq: "press/coolHunting.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        PD: file(relativePath: { eq: "press/PD.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        DM: file(relativePath: { eq: "press/DM.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        culaizuv: file(relativePath: { eq: "press/culaizuv.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        portfolio: file(relativePath: { eq: "press/portfolio.png" }) {
            childImageSharp {
                fluid(maxWidth: 190) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`
