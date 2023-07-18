import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

import GravityButton from '../GravityButton';
import homePicture from '../../Assets/homePicture3.jpg'

import '../../Scss/style.scss';


function Home(){

       
       return (
    <section id='Home'>

        <img src={homePicture} className='homePicture' alt= "Photographie d'une plante" />

        <div className='presentation'>

            <p className='helloPresentation'>Bonjour!</p>
            <h2>Je suis <strong>Simon Garbet</strong>,</h2>

            <div className='typeWriterSentence'>
                <p>développeur</p>
                <Typewriter
                options={{
                delay : 500,
                deleteSpeed: 20,
                loop: true,
                wrapperClassName: 'typewriterObject',
                }}
                onInit={(typewriter) => {
                typewriter
                .changeDelay(30)
                .pasteString('<span style="color: #563D7C;"><strong>CSS</strong></span>')
                .pauseFor(1500)
                .deleteChars(6)
                .typeString('<span style="color: #F0DB4F;"><strong> Javascript</strong></span>')
                .pauseFor(1500)
                .deleteChars(13)
                .typeString('<span style="color: #15D7F7;"><strong> React</strong></span>')
                .pauseFor(1500)
                .deleteChars(6)
                .typeString('<span style="color: #90c53f;"><strong> Express</strong></span>')
                .pauseFor(1500)
                .start();
                }}
                />
            </div>

            <p>basé à Bordeaux.</p>

            <div className='containerBoutonDecouvrir'>
                <span className='calqueBoutonDecouvrir'> Découvrir mes Projets</span>
            <a href='#lineProjects' className='boutonDecouvrir'>Découvrir mes Projets</a>
            </div>

            <div className='buttonLine'>
            <GravityButton 
                key = 'GravityButton1'
                logo = {faEnvelope}
                size = 'lg'
                color = '#fff'
            />
                <GravityButton 
                key = 'GravityButton2'
                logo = {faGithub}
                size = 'lg'
                color = '#fff'
            />
                <GravityButton 
                key = 'GravityButton3'
                logo = {faLinkedin}
                size = 'lg'
                color = '#fff'
            />
                <GravityButton 
                key = 'GravityButton4'
                logo = {faDiscord}
                size = 'lg'
                color = '#fff'
            />
            </div>     
        
        </div>

    </section>
       )
    
}






export default Home;