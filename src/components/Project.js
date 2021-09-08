import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { FaGithub, FaLink } from 'react-icons/fa';

function Project() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Card className='project-card'  >
                        <div >
                            <h2 className='project-title'>Red Vet</h2>
                        </div>
                        <Card.Body className='project-body'>
                            <img className='mb-3' src='images/Project-Red-Vet-Small.png' />

                            <div className='project-description text-center'>
                                < p>Strona internetowa wykonana dla zaprzyjaźnionej przychodni weterynaryjnej</p>
                            </div>
                            <div className='project-technologies'>
                                <p><strong>React.js, HTML, SCSS, Bootstrap</strong></p>
                            </div>
                            <div className='project-links'>
                                <a className='project-link' href='https://github.com/Cristopher-91/Red-Vet-React'><FaGithub fontSize='40'></FaGithub></a>
                                <a className='project-link' href='https://red-vet.firebaseapp.com/#/'><FaLink fontSize='40'></FaLink></a>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Project
