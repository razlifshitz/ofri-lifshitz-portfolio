import React from 'react'
import { Link } from 'gatsby'

// style
import style from '../styles/contact.module.scss'

// components
import Layout from '../components/Layout'
import { usePlatesImages } from '../hooks/graphql/usePlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'

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
                <div className={style.successMessage}>
                    <h3 style={{ marginBottom: '2rem' }}>
                        We can't seem to find the page you're looking for.
                    </h3>
                    <Link className={style.button} to="/">
                        ← Back Home
                    </Link>
                </div>
            </RotatingPlateDialog>
        </Layout>
    )
}

export default NotFoundPage
