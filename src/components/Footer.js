import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import mailImage from '../images/icons/mail-r.png' 
import phoneImage from '../images/icons/phone-r.png' 
import linkedinImage from '../images/icons/linkedin-r.png' 
import githubImage from '../images/icons/github-r.png' 

import linkedinIcon from '../images/icons/linkedin-icon.svg' 
import githubIcon from '../images/icons/github-icon.svg' 
import facebookIcon from '../images/icons/facebook-icon.svg' 
import FooterIcon from './FooterIcon'






class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer-broad'>
                    <Container>
                        <Row>
                            <Col className='col-12 col-sm-4'>
                                <div className='footer-column align-items-center align-items-sm-start mb-4'>
                                    <h3 className='semi-title-left'>Kontakt</h3>
                                    <span>k.piasecki91@gmail.com</span>
                                    <span>723-144-668</span>
                                </div>
                            </Col>
                            <Col className='col-12 col-sm-4'>
                                <div className='footer-column align-items-center align-items-sm-start mb-4'>
                                    <h3 className='semi-title-left'>Dokumenty</h3>
                                    <span><a href='#'>CV polskie</a></span>
                                    <span><a href='#'>CV angielskie</a></span>
                                </div>
                                </Col>
                            <Col className='col-12 col-sm-4'>
                                <div className='footer-column align-items-center align-items-sm-start mb-4'>
                                    <h3 className='semi-title-left'>Media</h3>
                                            <div className='footer-icons'>
                                                <a href='https://www.linkedin.com/in/piasecki-krzysztof/' className='footer-icon-link footer-icon-right'><img src={linkedinIcon} alt='linkedin-icon'></img></a>
                                                <a href='https://github.com/Cristopher-91' className='footer-icon-link footer-icon-right'><img src={githubIcon} alt='github-icon'></img></a>
                                                <a href='https://www.facebook.com/krzysztof.piasecki.94/' className='footer-icon-link'><img src={facebookIcon} alt='facebook-icon'></img></a>
                                            </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='footer-narrow'>
                    <Container>
                        <Row>
                            <span>Krzysztof Piasecki &#169; 2021 Wszelkie prawa zastrzeżone</span>
                        </Row>
                    </Container>
                </div>

            </footer>
        )
    }
}

export default Footer