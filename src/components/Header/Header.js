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

    const StyledParticles = styled(Particles)`
        position: absolute;
        width: 100%;
        height: 100%;
    `

    const HeaderTextBox = styled.div`
        text-align: center;
        text-shadow: 0px 1px 10px red;
        color: white;
    `

    const Title = styled.h1`
        text-transform: uppercase;
        letter-spacing: 0.5rem;
    `

    const SubTitle = styled.h2`
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        text-shadow: 0, 0, 10, black;
        animation: moveInTop 3s ease-out;
    `

    return (
        <Header>
            <HeaderWrapper>
            <StyledParticles      
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
                    <HeaderTextBox>
                        {/* <h1>Krzysztof Piasecki</h1>
                        <SubTitle>Web Developer</SubTitle> */}
                        <Title>Test</Title>
                        <TypeWriter/>
                    </HeaderTextBox>
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
