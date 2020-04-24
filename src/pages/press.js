import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// components
import Layout from '../components/Layout'
import NoStretchImage from '../components/NoStretchImage'
//constants
import { PRESS } from '../constants/one-of.constants'
import { useResize } from '../hooks'
// import portfolioSrc from '../assets/logos/portfolio.svg'

const PressPage = ({ data }) => {
    // constants
    const ONE_COLUMN_WIDTH = '511px'
    // images
    const designZoom = data.designZoom.childImageSharp.fixed
    const coolHunting = data.coolHunting.childImageSharp.fixed
    const PD = data.PD.childImageSharp.fixed
    const DM = data.DM.childImageSharp.fixed
    const culaizuv = data.culaizuv.childImageSharp.fixed
    const portfolioSrc = data.portfolio.childImageSharp.fixed
    // press list
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
        {
            magazine: 'portfolio',
            url: 'https://www.prtfl.co.il/archives/126582',
            logo: portfolioSrc,
        },
    ]

    // ref
    const contentRef = useRef()
    // state
    const [isMobileView, setIsMobileView] = useState(null)
    const [contentHeight, setContentHeight] = useState(null)

    useResize(() => {
        const result = window.matchMedia(`(max-width: ${ONE_COLUMN_WIDTH}`)
        setIsMobileView(result.matches)

        // calculating visible content height
        // https://stackoverflow.com/questions/24768795/get-the-visible-height-of-a-div-with-jquery
        const r = contentRef.current.getBoundingClientRect()
        const elH = contentRef.current.offsetHeight
        const t = r.top
        const b = r.bottom
        const H = window.innerHeight
        const visibleContentHeight = Math.max(
            0,
            t > 0 ? Math.min(elH, H - t) : Math.min(b, H)
        )

        setContentHeight(visibleContentHeight)
    }, [])

    return (
        <Layout activeItem={PRESS}>
            <Wrapper>
                <PressList
                    ref={contentRef}
                    contentHeight={contentHeight}
                    isMobileView={isMobileView}
                >
                    {pressList.map(pressItem => {
                        return (
                            <ImageCard
                                key={pressItem.url}
                                logo={pressItem.logo}
                                url={pressItem.url}
                                isMobileView={isMobileView}
                            ></ImageCard>
                        )
                    })}
                </PressList>
            </Wrapper>
        </Layout>
    )
}

function ImageCard({ logo, url, isMobileView }) {
    return (
        <PressItem isMobileView={isMobileView}>
            <PressLink href={url}>
                <PressImage fixed={logo}></PressImage>
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

// Multi column W3School

// const Wrapper = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     padding: 0 4px;
// `

// const PressColumn = styled.div`
//     flex: 33%;
//     max-width: 33%;
//     padding: 0 10px;
// `

// const PressItem = styled.div`
//     width: 190px;
//     height: 150px;
//     // margin: 0 auto;
// `

// const PressLink = styled.a.attrs(props => ({
//     target: '_blank',
//     rel: 'noopener noreferrer',
//     href: props.href,
// }))``

// const PressImage = styled(NoStretchImage)`
//     // margin-top: 1.52rem !important;
//     // margin: auto 0 !important;
//     // vertical-align: middle !important;
//     // width: 100% !important;
// `

//////////////////////////////

// const Wrapper = styled.div`
//     // width: 750px;
//     // margin: 0 auto;
// `

// const PressList = styled.div`
//     // margin-left: 0;
//     // list-style-type: none;

//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 0 87px;
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

const Wrapper = styled.div``

const PressList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
    grid-template-rows: auto;
    justify-items: center;

    animation: fade-in 1s;

    // web
    margin-top: ${props => (props.isMobileView ? 'inherit' : '35px')};
    grid-auto-rows: ${props => (props.isMobileView ? 'inherit' : '150px')};
    // grid-gap: 0 87px;

    // mobile
    height: ${props =>
        props.isMobileView ? props.contentHeight + 'px' : 'inherit'};
    align-content: ${props =>
        props.isMobileView ? 'space-evenly' : 'inherit'};
`

const PressItem = styled.div`
    margin: ${props => (props.isMobileView ? 'inherit' : 'auto 0')};
`

const PressLink = styled.a.attrs(props => ({
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.href,
}))``

const PressImage = styled(NoStretchImage)``

export const query = graphql`
    query {
        designZoom: file(relativePath: { eq: "press/designZoom.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        coolHunting: file(relativePath: { eq: "press/coolHunting.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        PD: file(relativePath: { eq: "press/PD.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        DM: file(relativePath: { eq: "press/DM.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        culaizuv: file(relativePath: { eq: "press/culaizuv.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        portfolio: file(relativePath: { eq: "press/portfolio.png" }) {
            childImageSharp {
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
    }
`
