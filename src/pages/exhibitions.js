import React from 'react'

import Layout from '../components/layout'

const exhibitions = [
    {
        name: 'Industrial One Of v2.0',
        exhibition: 'Shibush',
        place: 'Holon institution of technology, Israel',
    },
    {
        name: 'Indutrial One Of - v1.5 - Jerusalem',
        exhibition: '',
        place: 'Jerusalem, Israel',
    },
]

const ExhibitionsPage = () => {
    return (
        <Layout>
            {exhibitions.map(exhibition => (
                <p>
                    <h3>
                        {exhibition.name}
                        <br />
                        {exhibition.place}
                    </h3>
                </p>
            ))}
        </Layout>
    )
}

export default ExhibitionsPage
