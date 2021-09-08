import React from 'react'
import Project from './Project'
import { Row } from 'react-bootstrap'

import { ProjectsList } from '../json/Projects.js'

function Projects() {
    return (
        <Row>
            { ProjectsList.map((project, key) =>{
                return <Project
                    key={key}
                    title={project.title}
                    imagePath={project.imagePath}
                    alt={project.alt}
                    description={project.description}
                    technologies={project.technologies}
                    github={project.github}
                    live={project.live}
                    />
            })}
        </Row>
    )
}

export default Projects
