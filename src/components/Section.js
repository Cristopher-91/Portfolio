import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Section(props) {
    return (
        <section id={props.name} className={'section-' + props.name}>
            <div className={'section-' + props.name + '-mask'}>
                <Container>
                    <div className='py-5'>
                        <Row>
                            {props.children}
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Section
