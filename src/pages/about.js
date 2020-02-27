import React from 'react'

import Layout from '../components/layout'

const education = [
    '2013-2017/ B. Design, HIT (Holon Institute of Technology) - graduated with honor',
]

const awardsAndExhibitions = [
    '2018 / Award for art & design from AICF - America-Israel cultural foundation',
    '2018 / "Pro Jerusalem" - Jerusalem Design week - Hansen House Jerusalem',
    '2018 / "Shibush" Exhibition - "Vitrina" gallery Holon',
    '2017 / "Designing Technology" Exhibition - Expo Tel Aviv',
    '2017 / Design Department Dean’s first prize in excellence for Graduation Project',
]

const AboutPage = () => {
    return (
        <Layout>
            <h3>
                Ofri Lifshitz
                <br />
                Industrial Designer
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                tincidunt lectus sapien, mattis varius sem dapibus eu. Cras eget
                eros fermentum, commodo neque eget, lobortis tellus. Quisque
                dapibus tellus ut lobortis ornare. Donec nec vulputate tortor,
                id vulputate ex. Sed tristique rhoncus efficitur. Vestibulum
                justo risus, tempus vitae feugiat vel, imperdiet nec lacus.
                Nulla eu libero id ex dapibus accumsan at eu eros. Phasellus
                dapibus, felis a viverra suscipit, lorem diam porttitor dolor,
                in hendrerit diam ante sagittis turpis. Praesent vitae gravida
                quam. Suspendisse pellentesque est tortor, non pretium neque
                consequat porta. Fusce turpis libero, congue eu tristique
                malesuada, lobortis eu orci. Praesent ut lectus tincidunt,
                sagittis justo et, convallis orci. In venenatis mauris lectus,
                eu ultrices orci molestie vel. Aliquam auctor justo a erat
                dapibus commodo.
            </p>
            <FieldPresentation
                name="Education"
                data={education}
            ></FieldPresentation>
            <FieldPresentation
                name="Awards and Exhibitions"
                data={awardsAndExhibitions}
            ></FieldPresentation>
        </Layout>
    )
}

const FieldPresentation = props => {
    return (
        <p>
            <h3>{props.name}</h3>
            {props.data.map(text => (
                <h6>{text}</h6>
            ))}
        </p>
    )
}

export default AboutPage
