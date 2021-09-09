import React from 'react'
import TypeWriter from './TypeWriter'
import '../animations.scss';
import { Container, Row } from 'react-bootstrap';
import Particles from 'react-particles-js';
import ArrowDown from './ArrowDown';

function Header() {
    return (
        <header>
            <div className='header-wrapper'>
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
            </div>
            <Container>
                <Row>
                    <ArrowDown/>
                </Row>
            </Container>

        </header>
    )
}

export default Header
