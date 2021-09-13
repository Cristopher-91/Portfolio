import React from 'react'
import styled from 'styled-components'

const TypeWriter = () => {

  const TypewriterText = styled.p`
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 1.5s steps(50, end),
      blink-caret .75s step-end infinite;
  `

    return (
        <div className="d-inline-block">
            <TypewriterText>Miło mi powitać Cię na mojej stronie</TypewriterText>
        </div>
    )
}
export default TypeWriter
