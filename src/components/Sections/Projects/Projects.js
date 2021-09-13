import React from 'react'
import Section from '../../Section'
import Project from './Project'
import Title from '../../Title'

import { ProjectsList } from '../../../json/Projects.js'

function Projects() {
    return (
        <Section name='projects'>
            <Title>Projekty</Title>
            {ProjectsList.map((project, key) => {
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
        </Section>
    )
}

export default Projects
