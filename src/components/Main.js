import React from 'react'
import Section from './Section'
import { Container, Row, Col } from 'react-bootstrap'


import myImage from '../images/Me.png' 
import selfImage from '../images/Self-Image.jpg' 
import htmlImage from '../images/skills/html.png'
import cssImage from '../images/skills/css.png' 
import mysqlImage from '../images/skills/mysql.png'
import tsImage from '../images/skills/ts.png'
import gitImage from '../images/skills/git.png'
import reactImage from '../images/skills/react.png' 
import jsImage from '../images/skills/js.png' 
import sassImage from '../images/skills/sass.png' 
import drupalImage from '../images/skills/drupal.png' 
import visualImage from '../images/skills/visual.png' 
import phpImage from '../images/skills/php.png' 
import laravelImage from '../images/skills/laravel.svg' 
import ContactForm from './ContactForm'
import { Button, Tooltip } from 'bootstrap'
import Projects from './Projects'

function Main() {

    return (
        <main>
            <Section name='about-me'>
                <h2 className='title'>O mnie</h2>
                <Col lg={5}>
                    <img src={selfImage} className='mb-4 mb-lg-0' alt='Krzysztof Piasecki - zdjęcie' />
                </Col>
                <Col>
                    <div className='about-me'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum nisi lorem, ut sollicitudin arcu molestie eu. Phasellus eget enim id urna efficitur fringilla a suscipit erat. Etiam in sapien blandit, blandit ipsum in, ornare mauris. Etiam eget mauris id dui lacinia iaculis quis eu nisi. Quisque mattis ac mi non venenatis. Aliquam eleifend in massa eu tristique. Nullam vel nisl rutrum, fringilla sapien et, sagittis quam.</p>
                        <p>Aenean condimentum augue at facilisis condimentum. In egestas arcu eu velit maximus pharetra. Praesent pulvinar arcu in lorem lobortis pretium. Fusce id lacus feugiat, ultrices sapien quis, semper risus. Sed pretium sed justo feugiat tempor. Nunc lobortis dapibus urna, vel vulputate mauris eleifend id. Nunc ultrices nulla non quam consequat luctus. Cras orci nunc, cursus ac est non, auctor iaculis velit. In et tristique quam. Maecenas vel pharetra quam. Ut in leo sollicitudin, efficitur nisl ut, finibus lacus.</p>
                    </div>
                </Col>
            </Section>
            <Section name='skills'>
                <h2 className='title'>Umiejętności</h2>
                    <div className='skills-group-with-title'>
                        <h3 className='semi-title'>Technologie z którymi pracowałem i których używam</h3>
                            <div className='skills-group'>
                                <img src={htmlImage} alt='HTML-ikona'/>
                                <img src={cssImage} alt='CSS-ikona' />
                                <img src={jsImage} alt='JS-ikona' />                               
                                <img src={drupalImage} alt='Drupal-ikona' /> 
                                <img src={phpImage} alt='PHP-ikona' />        
                                <img src={gitImage} alt='GIT-ikona' />                  
                                <img src={visualImage} alt='VisualStudio-ikona' />
                                <img src={mysqlImage} alt='MySQL-ikona' />                  
                                <img src={sassImage} alt='Sass-ikona' />   
                        </div>  
                        <h3 className='semi-title'>Technologie, których się uczę</h3>
                            <div className='skills-group'>
                                <img src={reactImage} alt='React-ikona' />
                                <img src={laravelImage} alt='Laravel-ikona' />
                                <img src={tsImage} alt='TS-ikona' />   
                        </div>                
                    </div>
            </Section>
            <Section name='projects'>
                <h2 className='title'>Projekty</h2>
                <Projects/>
            </Section>
            <Section name='contact'>
                <h2 className='title'>Kontakt</h2>
                <h3 className='semi-title'>Skontaktuj się ze mną za pomocą formularza</h3>
                <ContactForm/>
            </Section>
        </main>
    )
}

export default Main

