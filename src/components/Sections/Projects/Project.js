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
    `

    const ProjectBody = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 1rem;
    `
    const ProjectLink = styled.a`
        padding: 0 .5em;
        
        svg{
            transition: color .5s ease-in-out;
            &:hover{
                color:#c00000;
            }
        }
    `

    return (
        <Col md={6}>
            <ProjectCard  >
                <div >
                    <ProjectTitle>{props.title}</ProjectTitle>
                </div>
                <ProjectBody>
                    <img className='mb-3' src={`../images/projects/${props.imagePath}`} alt={props.alt} />

                    <div className='project-description text-center'>
                        <p>{props.description}</p>
                    </div>
                    <div className='project-technologies'>
                        <p><strong>{props.technologies}</strong></p>
                    </div>
                    <div className='project-links'>
                        <ProjectLink href={props.github}><FaGithub fontSize='40'></FaGithub></ProjectLink>
                        <ProjectLink href={props.live}><FaLink fontSize='40'></FaLink></ProjectLink>
                    </div>
                </ProjectBody>
            </ProjectCard>
        </Col>
    )
}

export default Project
