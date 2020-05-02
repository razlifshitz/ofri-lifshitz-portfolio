import React from 'react'
import styled from 'styled-components'
// style
import baseStyle from '../styles/base.module.scss'
// components
import Layout from '../components/Layout'
import { usePlatesImages } from '../hooks/graphql/usePlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'
import { GreyLink } from '../styled-components'
// constants
import { getRandIndex } from '../constants/one-of.constants'

const NotFoundPage = () => {
    const images = usePlatesImages()

    return (
        <Layout>
            <RotatingPlateDialog
                title="Oops!"
                images={images}
                activeIndex={getRandIndex(images.length)}
                isConstantImage={true}
            >
                <Wrapper>
                    <Message>
                        We can't seem to find the page you're looking for.
                    </Message>
                    <GreyLink to="/">← Back Home</GreyLink>
                </Wrapper>
            </RotatingPlateDialog>
        </Layout>
    )
}

export default NotFoundPage

const Wrapper = styled.div`
    margin-top: 4.5rem;
    animation: fade-in 1s;

    @media (max-width: ${baseStyle.contactMobileDisplay}) {
        margin-top: 0;
        text-align: center;
    }
`

const Message = styled.h3`
    margin-bottom: 4rem;
`
