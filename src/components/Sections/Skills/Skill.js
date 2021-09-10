import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const Skill = (props) => {

    const SkillImage = styled.img`
      margin: 1rem;
      border-radius: 5px;
      transition: transform 0.25s ease-in-out;
      &:hover{
        transform: scale(1.1);
    `

    return (
        <>
            <SkillImage src={props.image} data-tip data-for={props.title} alt={props.alt} />
            <ReactTooltip id={props.title}  place="bottom" effect='solid' type='light'>
                {props.title}
            </ReactTooltip>
        </>
    )
}

export default Skill
