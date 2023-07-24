import { useEffect, useState } from 'react';

import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

import GravityButton from '../GravityButton';
import homePicture from '../../Assets/homePicture3.jpg'

import '../../Scss/style.scss';


function Home(){


    const [animation, setAnimation] = useState(false);

    useEffect(() => {

        if (animation === true) {
        setTimeout(() => {setAnimation(false)}, "2700" )
        }
        
      }, [animation]);
    
       
       return (
    <section className='globalBanner'>

        <img src={homePicture} className='homePicture' alt= "Photographie d'une personne faisant du surf" />

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

            <div className='containerDiscoverButton'>
                <span className='calqDiscoverButton'> Découvrir mon Profil</span>
            <a href='#lineAboutMe' className='discoverButton'>Découvrir mon Profil</a>
            </div>

            <div className='buttonLine'>

            <a href='mailto: simon.garbet@gmail.com' target="_blank" rel="noopener noreferrer">
            <GravityButton 
                key = 'GravityButton1'
                logo = {faEnvelope}
                size = 'lg'
                color = '#fff'
            />
            </a>

            <a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">   
                <GravityButton 
                key = 'GravityButton2'
                logo = {faGithub}
                size = 'lg'
                color = '#fff'
            />
            </a> 

            <div className = {animation ? "copiedDivDiscord" : "classicDivDiscord" } onClick={() => {setAnimation(true); navigator.clipboard.writeText('_syzymon')}}>
                <GravityButton 
                key = 'GravityButton4'
                logo = {faDiscord}
                size = 'lg'
                color = '#fff'
            />
            </div>
            </div>     
        
        </div>

    </section>
       )
    
}







export default Home;