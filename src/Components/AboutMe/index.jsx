import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss';


function AboutMe() {
  return (
    <section id= 'aboutMe'>
      <div className='globalDescription'>
        <div className='aboutTitle'>
          <FontAwesomeIcon icon={faMeteor} />
          <h3>À propos</h3>
        </div>
        <p>Je suis <strong> Simon</strong>, fraîchement diplômé du cursus <strong>Développeur Web</strong> d'OpenClassrooms.</p>
        <p>Je suis un <strong>développeur junior</strong> qui souhaite se <strong>spécialiser</strong> sur les <strong>frameworks Front End</strong>.</p>
        <p><strong>Curieux, créatif, avec une soif d'apprendre</strong> je reste ouvert à toute sorte de proposition professionnelle liée développement web.</p>
        <p>Vous pouvez retrouver le code de ce site <a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">ici</a> et mes autres projets un peu plus bas.</p>
      </div>
      <img src="http://localhost:3000/Assets/imageProfil.jpg" alt = 'Photographie de Simon Garbet' />
      
    </section>
  )
}

export default AboutMe