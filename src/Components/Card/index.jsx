import '../../Scss/style.scss'


function Card( {title, subtitle, maincolor, imageFond }){
    return (
            <div className='containerCard' style={{border : `5px solid${maincolor}`,}}>
                <img className='backCard' src ={imageFond} alt="Vignette d'un autre projet"/>
                <p className='cardProjectTitle' style={{color: `${maincolor}`,}}>{title}</p>
                <p className='cardProjectSubtitle'>{subtitle}</p>       
            </div>
    )
    

 
}

export default Card;