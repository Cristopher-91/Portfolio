import React from 'react'
import Section from '../Section'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <Section name='contact'>
            <h2 className='title'>Kontakt</h2>
            <h3 className='semi-title'>Skontaktuj się ze mną za pomocą formularza</h3>
            <ContactForm />
        </Section>
    )
}

export default Contact
