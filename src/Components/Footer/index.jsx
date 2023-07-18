import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

import GravityButton from '../GravityButton';

import '../../Scss/style.scss'



function Footer(){
    return (
        <section className='footer'>

            <div className='buttonLineFooter'>
            <GravityButton 
                key = 'GravityButton1'
                logo = {faGithub}
                size = 'lg'
                color = '#fff'
            />
                <GravityButton 
                key = 'GravityButton2'
                logo = {faLinkedin}
                size = 'lg'
                color = '#fff'
            />
                <GravityButton 
                key = 'GravityButton3'
                logo = {faDiscord}
                size = 'lg'
                color = '#fff'
            />
            </div>

            <div className='emailLine'>
            <GravityButton 
                key = 'GravityButton3'
                logo = {faEnvelope}
                size = 'lg'
                color = '#fff'
            />
            <p>simon.garbet@gmail.com</p>
            </div>

            <p className='disclaimerFooter'>Site réalisé par Simon Garbet avec <strong>l'outil de TypeWriter</strong> que vous pouvez consulter <a href='https://github.com/tameemsafi/typewriterjs' target="_blank" rel="noopener noreferrer">ici</a> et le <strong>Bouton Gravité</strong> récupéré <a href='https://codepen.io/amit_sheen/pen/LYXPVKV' target="_blank" rel="noopener noreferrer">ici</a></p>
            <p>Vous pouvez retrouver le code de ce site juste <a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">ici</a></p>
        </section>
    )
}

export default Footer;