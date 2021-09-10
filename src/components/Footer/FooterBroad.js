import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import linkedinIcon from '../../images/icons/linkedin-icon.svg'
import githubIcon from '../../images/icons/github-icon.svg'
import facebookIcon from '../../images/icons/facebook-icon.svg'
import footerBackground from '../../images/Background-motherboard.jpg'

const FooterBroad = () => {

    const FooterWrapper = styled.div`
        background-image: url(${footerBackground});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
        color: white;
    `

    const FooterWrapperMask = styled.div`
        background-color: rgba(192,0,0,0.8);
        padding: 2rem 0rem;
    `

    const FooterColumn = styled.div`
        display: flex;
        flex-direction: column;
    `

    const FooterIconLink = styled.a`
        transition: .5s;
        &:hover{
            img{
              filter: invert(0%);
            }
    `

    const FooterIcon = styled.img`
        filter: invert(1);
        width: 30px;
    `
return (
    <FooterWrapper>
        <FooterWrapperMask>
            <Container>
                <Row>
                    <Col className='col-12 col-sm-4'>
                        <FooterColumn className='align-items-center align-items-sm-start mb-4'>
                            <h3 className='semi-title-left'>Kontakt</h3>
                            <span>k.piasecki91@gmail.com</span>
                            <span>723-144-668</span>
                        </FooterColumn>
                    </Col>
                    <Col className='col-12 col-sm-4'>
                        <FooterColumn className='align-items-center align-items-sm-start mb-4'>
                            <h3 className='semi-title-left'>Dokumenty</h3>
                            <span><a href='#'>CV polskie</a></span>
                            <span><a href='#'>CV angielskie</a></span>
                        </FooterColumn>
                    </Col>
                    <Col className='col-12 col-sm-4'>
                        <FooterColumn className='align-items-center align-items-sm-start mb-4'>
                            <h3 className='semi-title-left'>Media</h3>
                            <div>
                                <FooterIconLink href='https://www.linkedin.com/in/piasecki-krzysztof/' className='footer-icon-link me-2'>
                                    <FooterIcon src={linkedinIcon} alt='linkedin-icon'></FooterIcon>
                                </FooterIconLink>
                                <FooterIconLink href='https://github.com/Cristopher-91' className='footer-icon-link me-2'>
                                    <FooterIcon src={githubIcon} alt='github-icon'></FooterIcon>
                                </FooterIconLink>
                                <FooterIconLink href='https://www.facebook.com/krzysztof.piasecki.94/' className='footer-icon-link'>
                                    <FooterIcon src={facebookIcon} alt='facebook-icon'></FooterIcon>
                                </FooterIconLink>
                            </div>
                        </FooterColumn>
                    </Col>
                </Row>
            </Container>
        </FooterWrapperMask>
    </FooterWrapper>
)
}
export default FooterBroad
