import { Link } from 'react-router-dom';

import '../../Scss/style.scss'


function Card( {id, title, subtitle, maincolor, imageFond }){
    return (
        <Link to ={`/projet/${id}`}>
            <div className='containerCard' style={{border : `3px solid${maincolor}`,}}>
                <img className='fondCard' src ={imageFond} alt="Vignette d'un autre projet"/>
                <p className='cardProjectTitle' style={{color: `${maincolor}`,}}>{title}</p>
                <p className='cardProjectSubtitle'>{subtitle}</p>                
            </div>
        </Link>
    )
    

 
}

export default Card;