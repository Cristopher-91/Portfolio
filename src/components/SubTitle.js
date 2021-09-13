import React from 'react'
import styled from 'styled-components'

const StyledSubTitle = styled.h3`
    text-transform: uppercase;
    text-align: center;
    font-size: .75rem;
    line-height: 1.5rem;
    letter-spacing: .5rem;
`

const SubTitle = (props) => {
    return (
        <StyledSubTitle>
            {props.children}
        </StyledSubTitle>
    )
}

export default SubTitle
