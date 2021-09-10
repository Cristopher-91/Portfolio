import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const FooterNarrow = () => {

    const FooterWrapper = styled.div`
        padding: 12px;
        background-color:black;
        color: white;
        text-align: center;
    `

    return (
        <FooterWrapper>
            <Container>
                <Row>
                    <span>Krzysztof Piasecki &#169; 2021 Wszelkie prawa zastrzeżone</span>
                </Row>
            </Container>
        </FooterWrapper>
    )
}

export default FooterNarrow
