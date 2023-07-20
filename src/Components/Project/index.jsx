import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faDiamond, faSquare, faPlay, faShield} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../Scss/style.scss';



function Project({id, title, subtitle, category, description, githubLink, imageDesktop, imageMobile}){

    let iconFontAwesome = faShield
    let colorFontAwesome = '#949494'

    if (category === 'Javascript'){
        iconFontAwesome = faPlay
        colorFontAwesome = '#F0DB4F'
    } else if (category === 'React') {
        iconFontAwesome = faSquare
        colorFontAwesome = '#15D7F7'
    } else if (category === 'Node') {
        iconFontAwesome = faDiamond
        colorFontAwesome = '#90c53f'
    } else if (category === 'CSS') {
        iconFontAwesome = faCircle
        colorFontAwesome = '#563D7C'
    }
 
    return (
       <figure className='globalProject'>
        <div className='lienProjet'>
        
            <div className='globalDescriptionProject'>


                <div className='globalTitlePartProject'>
                    <FontAwesomeIcon icon= {iconFontAwesome} className='fontAwesomeTitleProject' style={{color: colorFontAwesome}}/>
                    <div className='titlePartProject'>
                        <h3>{title} </h3>
                        <p>{subtitle}</p>
                        <div>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{color: "rgba(0,0,0,0.8",}} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='rightsideDescriptionProject'>
                    <p>{description}</p>
            
                    
                    <Link to = {`/projet/${id}`} className='projectView'>
                    <p>Voir le Projet</p>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: colorFontAwesome,}} />
                    </Link>
                    
                    
                    
                    
                </div>
            </div>

            <div className='picturePartProject'>
                <img src ={imageDesktop} className='pictureDesktop' alt =  'Aperçu Projet 7 Backend Version Desktop' />
                <img src ={imageMobile} className='pictureMobile'  alt =  'Aperçu Projet 7 Backend Version Mobile' />                
            </div>
            <div className='lineProjects'></div>
        </div>
       </figure>
    )
}






export default Project;

