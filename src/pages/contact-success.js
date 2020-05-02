import React from 'react'
import styled from 'styled-components'
// style
import baseStyle from '../styles/base.module.scss'
// componentes
import Layout from '../components/Layout'
import { usePlatesImages } from '../hooks/graphql/usePlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'
import { GreyLink } from '../styled-components'
// constants
import { getRandIndex } from '../constants/one-of.constants'

const ContactSuccessPage = () => {
    const images = usePlatesImages()

    return (
        <Layout>
            <RotatingPlateDialog
                title="Thank you!"
                images={images}
                activeIndex={getRandIndex(images.length)}
                isConstantImage={true}
            >
                <Wrapper>
                    <Message>
                        I have received your message!<br></br>Will get back to
                        you shortly :)
                    </Message>
                    <GreyLink to="/">← Back Home</GreyLink>
                </Wrapper>
            </RotatingPlateDialog>
        </Layout>
    )
}

export default ContactSuccessPage

const Wrapper = styled.div`
    margin-top: 4.5rem;
    animation: fade-in 1s;

    @media (max-width: ${baseStyle.contactMobileDisplay}) {
        margin-top: 0;
        text-align: center;
    }
`

const Message = styled.h3`
    font-weight: 600;
    margin-bottom: 4rem;
`
