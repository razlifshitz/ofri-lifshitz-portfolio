import React from 'react'
import { Link } from 'gatsby'

// style
import style from '../styles/contact.module.scss'

// componentes
import Layout from '../components/layout'
import { withPlatesImages } from '../components/hoc/withPlatesImages'
import RotatingPlateDialog from '../components/RotatingPlateDialog'

// constants
import { getRandIndex } from '../constants/one-of.constants'

const ContactSuccessPage = props => {
    return (
        <Layout>
            <RotatingPlateDialog
                title="Thank you!"
                images={props.images}
                activeIndex={getRandIndex(props.images.length)}
            >
                <div className={style.successMessage}>
                    <h3 style={{ marginBottom: '7rem' }}>
                        I have received your message!<br></br>Will get back to
                        you shortly :)
                    </h3>
                    <Link className={style.button} to="/">
                        ← Back Home
                    </Link>
                </div>
            </RotatingPlateDialog>
        </Layout>
    )
}

export default withPlatesImages(ContactSuccessPage)
