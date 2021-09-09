import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { FaGithub, FaLink } from 'react-icons/fa';
import styled from 'styled-components';



const Project = (props) => {

    const ProjectCard = styled(Card)`
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        margin-bottom: 3em;
    `

    const ProjectTitle = styled.h2`
        background-color: #c00000;;
        color: white;
        position: absolute;
        top: -25px;
        left: -15px;
        display: inline-block;
        padding: 5px 15px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;



    return (
        <Col md={6}>
            <ProjectCard  >
                <div >
                    <ProjectTitle>{props.title}</ProjectTitle>
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
            </ProjectCard>
        </Col>
    )
}

export default Project
