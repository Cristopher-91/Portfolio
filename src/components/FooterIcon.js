import React from 'react'

function FooterIcon(props) {


    return (
        <a href={props.source} className='footer-icon-link'>
            {props.children}
        </a>
    )
}

export default FooterIcon
