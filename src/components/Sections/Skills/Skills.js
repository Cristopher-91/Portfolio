import React from 'react'
import Section from '../../Section'
import Skill from './Skill'

import htmlImage from '../../../images/skills/html.png'
import cssImage from '../../../images/skills/css.png'
import mysqlImage from '../../../images/skills/mysql.png'
import tsImage from '../../../images/skills/ts.png'
import gitImage from '../../../images/skills/git.png'
import reactImage from '../../../images/skills/react.png'
import jsImage from '../../../images/skills/js.png'
import sassImage from '../../../images/skills/sass.png'
import drupalImage from '../../../images/skills/drupal.png'
import visualImage from '../../../images/skills/visual.png'
import phpImage from '../../../images/skills/php.png'
import laravelImage from '../../../images/skills/laravel.png'


const Skills = () => {
    return (
        <Section name='skills'>
            <h2 className='title'>Umiejętności</h2>
            <div className='text-center'>
                <h3 className='semi-title'>Technologie z którymi pracowałem i których używam</h3>
                <div className='mb-5'>
                    <Skill image={htmlImage} title="HTML5" alt='HTML-ikona'/>
                    <Skill image={cssImage} title="CSS3" alt='CSS-ikona' />
                    <Skill image={jsImage} title="JavaScript" alt='JS-ikona' />
                    <Skill image={drupalImage} title="Drupal 7/8" alt='Drupal-ikona' />
                    <Skill image={phpImage} title="PHP7" alt='PHP-ikona' />
                    <Skill image={gitImage} title="GIT" alt='GIT-ikona' />
                    <Skill image={visualImage} title="VS Code" alt='Visual Studio-ikona' />
                    <Skill image={mysqlImage} title="MySql" alt='MySQL-ikona' />
                    <Skill image={sassImage} title="Sass" alt='Sass-ikona' />
                </div>
                <h3 className='semi-title'>Technologie, których się uczę</h3>
                <div className='skills-group'>
                    <Skill image={reactImage} title="React.js" alt='React-ikona' />
                    <Skill image={laravelImage} title="Laravel" alt='Laravel-ikona' />
                    <Skill image={tsImage} title="TypeScript" alt='TS-ikona' />
                </div>
            </div>
        </Section>
    )
}

export default Skills
