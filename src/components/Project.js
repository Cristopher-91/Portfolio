import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { FaGithub, FaLink } from 'react-icons/fa';

function Project(props) {
    return (
        <Col md={6}>
            <Card className='project-card'  >
                <div >
                    <h2 className='project-title'>{props.title}</h2>
                </div>
                <Card.Body className='project-body'>
                    <img className='mb-3' src={`../images/projects/${props.imagePath}`} alt={props.alt} />

                    <div className='project-description text-center'>
                        <p>{props.description}</p>
                    </div>
                    <div className='project-technologies'>
                        <p><strong>{props.technologies}</strong></p>
                    </div>
                    <div className='project-links'>
                        <a className='project-link' href={props.github}><FaGithub fontSize='40'></FaGithub></a>
                        <a className='project-link' href={props.live}><FaLink fontSize='40'></FaLink></a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Project
