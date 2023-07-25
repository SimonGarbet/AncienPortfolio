import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faDiamond, faSquare, faPlay, faShield} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../Scss/style.scss';



function Project({id, maincolor, title, subtitle, category, summary, githubLink, imageDesktop, imageMobile}){

    let iconFontAwesome = faShield

    if (category === 'Javascript'){
        iconFontAwesome = faPlay
    } else if (category === 'React') {
        iconFontAwesome = faSquare
    } else if (category === 'Backend') {
        iconFontAwesome = faDiamond
    } else if (category === 'CSS') {
        iconFontAwesome = faCircle
    }
 
    return (
       <figure className='globalProjectComponent'>
        
            <div className='globalDescriptionProject'>


                <div className='globalTitlePartProject'>
                    <div className='titlePartProject'>
                    <FontAwesomeIcon icon= {iconFontAwesome} className='fontAwesomeTitleProject' style={{color: maincolor}}/>
                    <h3>{title} </h3>
                    </div>
                    <div className='subtitlePartProject'>
                        <p>{subtitle}</p>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "rgba(0,0,0,0.8",}} />
                        </a>
                    </div>
                </div>

                <div className='rightsideDescriptionProject'>
                    <p>{summary}</p>
            
                    
                    <Link to = {`/projet/${id}`} className='projectView'>
                    <p>Voir le Projet</p>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: maincolor,}} />
                    </Link>       
                    </div>        
                
            </div>

            <div className='picturePartProject'>
                <img src ={imageDesktop} className='pictureDesktop' alt =  'Aperçu Projet 7 Backend Version Desktop' />
                <img src ={imageMobile} className='pictureMobile'  alt =  'Aperçu Projet 7 Backend Version Mobile' />                
            </div>
            <div className='lineProjects'></div>
       </figure>
    )
}






export default Project;

