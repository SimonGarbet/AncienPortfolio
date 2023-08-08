import { useEffect, useState } from 'react';

import {  faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GravityButton from '../GravityButton';

import '../../Scss/style.scss'



function Footer(){

    const [animation, setAnimation] = useState(false);

    useEffect(() => {

        if (animation === true) {
        setTimeout(() => {setAnimation(false)}, "2500" )
        } 
        
      }, [animation]);

      const [animationEmail, setAnimationEmail] = useState(false);

    useEffect(() => {

        if (animationEmail === true) {
        setTimeout(() => {setAnimationEmail(false)}, "2500" )
        } 
        
    }, [animationEmail]);


    return (
        <section className='footer'>

            <div className='emailLine'>
                <p>simon.garbet@gmail.com </p>
                <button className= {animationEmail ? "copiedButtonEmail" : "classicButtonEmail"} onClick={() => {setAnimationEmail(true); navigator.clipboard.writeText('simon.garbet@gmail.com')}}>
                    <FontAwesomeIcon icon={faCopy} style={{color: "#ffffff",}} />
                </button>
           </div>

            <div className='buttonLineFooter'>

            <a href='mailto: simon.garbet@gmail.com' target="_blank" rel="noopener noreferrer">
            <GravityButton 
                key = 'GravityButton5'
                logo = {faEnvelope}
                size = 'lg'
                color = '#fff'
            />
            </a>

            <a href='https://github.com/SimonGarbet' target="_blank" rel="noopener noreferrer">
            <GravityButton 
                key = 'GravityButton6'
                logo = {faGithub}
                size = 'lg'
                color = '#fff'
            />
            </a>

            <a href='https://www.linkedin.com/in/simon-garbet-356532285/' target="_blank" rel="noopener noreferrer">   
                <GravityButton 
                key = 'GravityButton2'
                logo = {faLinkedin}
                size = 'lg'
                color = '#fff'
            />
            </a>

            <div className = {animation ? "copiedDivDiscord" : "classicDivDiscord" } onClick={() => {setAnimation(true); navigator.clipboard.writeText('_syzymon')}}>
                <GravityButton 
                key = 'GravityButton8'
                logo = {faDiscord}
                size = 'lg'
                color = '#fff'
                copyLink='_syzymon'             
            />
            </div>
            </div>
            
            <div className='disclaimerFooter'>
            <p ><a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">Site</a> réalisé par <strong>Simon Garbet</strong> avec l'outil <a href='https://github.com/tameemsafi/typewriterjs' target="_blank" rel="noopener noreferrer">TypeWriter</a>  et le <a href='https://codepen.io/amit_sheen/pen/LYXPVKV' target="_blank" rel="noopener noreferrer">Bouton gravité</a>. </p>
            <p>Crédits Photo : <a href= "https://jeremybishopphotography.com/" target="_blank" rel="noopener noreferrer"> Jeremy Bishop</a>.</p>
            </div>
        </section>
    )
}

export default Footer;