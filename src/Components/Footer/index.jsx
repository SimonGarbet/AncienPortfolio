import { useEffect, useState } from 'react';

import {  faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
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
            <p >Site réalisé par Simon Garbet avec <strong>l'outil de TypeWriter</strong> que vous pouvez consulter <a href='https://github.com/tameemsafi/typewriterjs' target="_blank" rel="noopener noreferrer">ici</a> et le <strong>Bouton Gravité</strong> récupéré <a href='https://codepen.io/amit_sheen/pen/LYXPVKV' target="_blank" rel="noopener noreferrer">ici</a></p>
            <p>Vous pouvez retrouver le code de ce site juste <a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">ici</a></p>
            </div>
        </section>
    )
}

export default Footer;