import React from 'react'
import { ChevronDoubleDown } from 'react-bootstrap-icons';

function ArrowDown() {
    return (
        <div className='arrow-down-wrapper'>
            <a href='#about-me'>
                <ChevronDoubleDown color='white' size={56} className='chevron-down' />
            </a>
        </div>

    )
}

export default ArrowDown
