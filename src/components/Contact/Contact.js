import React from 'react'
import Section from '../Section'
import ContactForm from './ContactForm'
import Title from '../Title'
import SubTitle from '../SubTitle'

const Contact = () => {
    return (
        <Section name='contact'>
            <Title className='title'>Kontakt</Title>
            <SubTitle className='semi-title'>Skontaktuj się ze mną za pomocą formularza</SubTitle>
            <ContactForm />
        </Section>
    )
}

export default Contact
