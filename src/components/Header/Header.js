import React from 'react'
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

import ArrowDown from './ArrowDown';
import TypeWriter from './TypeWriter'
import '../../animations.scss';

import Particles from 'react-particles-js';
import HeaderBackgroundImage from '../../images/Background.jpg'






const Header = () => {

    const Header = styled.header`
        height: 100vh;
        width: 100%;
        background-image: url(${HeaderBackgroundImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
    `
    const HeaderWrapper = styled.div`
        display: flex;
        align-items: center;
        height: 95vh;
        width: 100%;
    `

    return (
        <Header>
            <HeaderWrapper>
            <Particles      
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                    }
                }} />
            <Container>
                <Row>
                    <div className='header-text-box'>
                        {/* <h1>Krzysztof Piasecki</h1>
                        <h2>Web Developer</h2> */}
                        <h1>Test</h1>
                        <TypeWriter/>
                    </div>
                </Row>
            </Container>
            </HeaderWrapper>
            <Container>
                <Row>
                    <ArrowDown/>
                </Row>
            </Container>

        </Header>
    )
}

export default Header
