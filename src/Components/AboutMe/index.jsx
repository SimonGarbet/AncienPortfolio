import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDrowning} from '@fortawesome/free-solid-svg-icons';

import imageProfil from '../../Assets/imageProfil.jpg'

import '../../Scss/style.scss';


function AboutMe() {
  return (
    <section id= 'aboutMe'>
      <div className='globalDescription'>
        <div className='aboutTitle'>
          <FontAwesomeIcon icon={faPersonDrowning} />
          <h3>À propos</h3>
        </div>
        <p>Je suis <strong> Simon</strong>, nouvellement diplômé du cursus <strong>Développeur Web</strong> d'OpenClassrooms.</p>
        <p><strong>Développeur junior</strong> je souhaite me <strong>spécialiser</strong> sur les <strong>frameworks Front End</strong>.</p>
        <p><strong>Curieux, créatif, avec la volonté d'apprendre</strong> je reste ouvert à toute sorte de proposition professionnelle liée au développement web.</p>
        <p>Vous pouvez retrouver le code de ce site <a href='https://github.com/SimonGarbet/P8Garbet' target="_blank" rel="noopener noreferrer">ici</a> et mes autres projets un peu plus bas.</p>
      </div>
      <img src={imageProfil} alt = 'Photographie de Simon Garbet' />
      
    </section>
  )
}

export default AboutMe