import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function ContactForm() {

    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })

        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
          })
      }

    const validateEmail = (email) => {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
     }

    const validateName = (name) => {
        var numberReg = /\d/;
        return numberReg.test(name);
    }

    const findFormErrors = () => {
        const { mail, name, topic, message } = form
        const newErrors = {}
        // name errors
        if ( !mail || mail === '' ) newErrors.mail = 'Podaj e-mail!'
        else if ( !validateEmail(mail) ) newErrors.mail = 'Podaj prawidłową wartość e-maila!'

        if ( !name || name === '' ) newErrors.name = 'Podaj imię!'
        else if ( name.length > 25 ) newErrors.name = 'Imię za długie (max. 25 znaków)!'
        else if ( validateName(name) ) newErrors.name = 'Imię nie może zawierać cyfr!'

        if ( !topic || topic === '' ) newErrors.topic = 'Podaj temat wiadomości!'

        if ( !message || message === '' ) newErrors.message = 'Podaj treść wiadomości!'

            return newErrors
    }    

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = findFormErrors()

        if ( Object.keys(newErrors).length > 0 ) {
          setErrors(newErrors)
        } else {
          alert('Thank you for your feedback!')
        }
      }

    return (
        <Container>
        <Form onSubmit={handleSubmit} className='mt-4 form-box' noValidate>
            <Row>
            <Form.Group className='mb-3 col-md-6'>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type='email'
                    onChange={ e => setField('mail', e.target.value) }
                    isInvalid={ !!errors.mail }>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>{ errors.mail }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3 col-md-6'>
                <Form.Label>Imię</Form.Label>
                <Form.Control 
                    type='text' 
                    onChange={ e => setField('name', e.target.value) }
                    isInvalid={ !!errors.name }>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
                <Form.Label>Temat</Form.Label>
                <Form.Control 
                    type='text'
                    onChange={ e => setField('topic', e.target.value) }
                    isInvalid={ !!errors.topic }>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>{ errors.topic }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label for='messegeInput'>Wiadomość</Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows='5'
                    onChange={ e => setField('message', e.target.value) }
                    isInvalid={ !!errors.message }>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>{ errors.message }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='col-md-4'>
                <button 
                    type="submit" 
                    className="button-red mb-3"
                    >Wyślij wiadomość
                </button>
            </Form.Group>
        </Form>
        </Container>
    )
}

export default ContactForm
