import React from 'react'
import Section from './Section'

import ContactForm from './ContactForm'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'
import About from './Sections/About/About'

function Main() {

    return (
        <main>
            <About/>
            <Skills/>
            <Projects/>
            <Section name='contact'>
                <h2 className='title'>Kontakt</h2>
                <h3 className='semi-title'>Skontaktuj się ze mną za pomocą formularza</h3>
                <ContactForm/>
            </Section>
        </main>
    )
}

export default Main

