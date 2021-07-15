import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ContactCorm() {
    return (
        <form className='mt-4 form-box needs-validation' noValidate>
            <Row>
            <div className='mb-3 col-md-6'>
                <label for='emailInput' className='form-label'>Email</label>
                <input type='email' className='form-control' id='emailInput' required></input>
                <div className='invalid-feedback'>Mail prawidłowy</div>

            </div>
            <div className='mb-3 col-md-6'>
                <label for='nameInput' className='form-label'>Imię</label>
                <input type='text' className='form-control' id='nameInput' required></input>
            </div>
            </Row>
            <div className='mb-3'>
                <label for='topicInput' className='form-label'>Temat</label>
                <input type='text' className='form-control' id='topicInput' required></input>
            </div>
            <div className='mb-4'>
                <label for='messegeInput' className='form-label'>Wiadomość</label>
                <textarea className='form-control' id='messegeInput' rows='5' required></textarea>
            </div>
            <div className='col-md-4'>
                <button type="submit" className="button-red mb-3">Wyślij wiadomość</button>
            </div>
        </form>
    )
}

export default ContactCorm
