import React from 'react'
import { ChevronDoubleDown } from 'react-bootstrap-icons';

import styled from 'styled-components';

function ArrowDown() {

    const ArrowWrapper = styled.div`
        display: flex;
        justify-content: center;
        transform: translateY(-40px);
    `

    const StyledArrow = styled(ChevronDoubleDown)`
        animation: bounce 2s linear infinite;
        &:hover{
        cursor: pointer;
        } 
    `
    return (
        <ArrowWrapper>
            <a href='#about-me'>
                <StyledArrow color='white' size={56} />
            </a>
        </ArrowWrapper>

    )
}

export default ArrowDown
