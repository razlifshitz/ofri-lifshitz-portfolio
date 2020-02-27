import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

const pressList = [
    {
        magazine: 'Design Milk',
        title:
            'At “Industrial One Of,” Machines Leave Their Individual Mark on Pottery',
        author: 'Keshia Badalge',
        url:
            'https://design-milk.com/at-industrial-one-of-machines-leave-their-individual-mark-on-pottery/',
    },
    {
        magazine: 'Cool Hunting',
        title: 'ONE OF A KIND MACHINE-MADE CERAMICS',
        url:
            'https://coolhunting.com/tech/one-of-a-kind-machine-made-ceramics/',
    },

    {
        magazine: 'Puro Diseno',
        title: 'Cerámica modelada a máquina',
        author: 'Mara Derni',
        url:
            'https://www.purodiseno.lat/a-escala/piezas-de-ceramica-tecnologia-hecha-a-mano/',
    },
    {
        magazine: 'Design Zoom',
        title: 'עבודת היד של המכונה',
        author: 'Sigal Namir',
        url:
            'https://dezignzoom.co.il/%d7%a2%d7%91%d7%95%d7%93%d7%aa-%d7%94%d7%99%d7%93-%d7%a9%d7%9c-%d7%94%d7%9e%d7%9b%d7%95%d7%a0%d7%94-%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d-2017/',
    },
]

const PressPage = () => {
    return (
        <Layout>
            {pressList.map(pressData => (
                <p>
                    <h6>
                        {pressData.magazine}
                        <br />
                        <a
                            style={{ color: 'inherit', fontStyle: 'italic' }}
                            href={pressData.url}
                            target="_blank"
                        >
                            {pressData.title}
                        </a>
                        <br />
                        {pressData.author ? 'by ' + pressData.author : ''}
                    </h6>
                </p>
            ))}
        </Layout>
    )
}

export default PressPage
