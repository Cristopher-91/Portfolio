import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
`

const Title = (props) => {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    )
}

export default Title
