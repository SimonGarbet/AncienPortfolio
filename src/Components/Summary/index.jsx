import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faSquare, faPlay, faShield} from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss';



function Summary({id, maincolor, title, subtitle, category, summary, githubLink, imageDesktop, imageMobile}){

    let iconFontAwesome = null;

    if (category === 'frontbackend'){
        iconFontAwesome = faPlay
    } else if (category === 'optimisation') {
        iconFontAwesome = faShield
    } else if (category === 'backend') {
        iconFontAwesome = faSquare
    } else if (category === 'frontend') {
        iconFontAwesome = faCircle
    }
 
    return (
       <figure className='globalProjectComponent'>

            < div className='lineProjects'></div>
        
            <div className='globalDescriptionProject'>


                <div className='globalTitlePartProject'>
                    <div className='titlePartProject'>
                    <FontAwesomeIcon icon= {iconFontAwesome} className='fontAwesomeTitleProject' style={{color: maincolor}}/>
                    <h3>{title} </h3>
                    </div>
                    <div className='subtitlePartProject'>
                        <p>{subtitle}</p>
                        
                    </div>
                </div>

                <div className='rightsideDescriptionProject'>
                    <p>{summary}</p>
            
                    <div className='projectRedirectionHome'>
                        <Link to = {`/${id}`} className='projectView'>
                        <FontAwesomeIcon icon={faArrowRight} style={{color: maincolor,}} />
                        <p>Voir le <strong>Détail</strong></p>                
                        </Link>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className='projectView'>
                        <FontAwesomeIcon icon={faArrowRight} style={{color: maincolor,}} />
                        <p>Voir le <strong>Code</strong></p>                     
                        </a>
                    </div>       
                    </div>        
                
            </div>

            <div className='picturePartProject'>
                <img src ={imageDesktop} className='pictureDesktop' alt =  'Aperçu Projet 7 Backend Version Desktop' />
                <img src ={imageMobile} className='pictureMobile'  alt =  'Aperçu Projet 7 Backend Version Mobile' />                
            </div>
       </figure>
    )
}






export default Summary;

