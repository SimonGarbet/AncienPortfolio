import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss';





function GravityButton({logo, size, color}){


  
  const [translation, setTranslation] = useState({ tx: 0, ty: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const h = rect.width / 2;

    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - h;

    const r1 = Math.sqrt(x * x + y * y);
    const r2 = (1 - r1 / h) * r1;

    const angle = Math.atan2(y, x);
    const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
    const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

    setTranslation({ tx, ty });
  };

  const handleMouseLeave = () => {
    setTranslation({ tx: 0, ty: 0 });
  };




  const [animation, setAnimation] = useState(false);

  useEffect(() => {

    if (animation === true) {
    setTimeout(() => {setAnimation(false)}, "2000" )
    }
        
  }, [animation]);


    return (
      <div onClick={() => setAnimation(true) } 
      className = {animation ? 'gravityCopied' : 'gravityButton'} 
      onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          '--tx': `${translation.tx}px`,
          '--ty': `${translation.ty}px`,
        }}
      >
        <button className='buttonIconCheck'>
          <FontAwesomeIcon icon={faCircleCheck} size={size} style={{color: color,}} />
          </button>
          <button className='buttonIcon'>
          <FontAwesomeIcon icon={logo} size={size}  style={{color: color,}} />
          </button>   
        </div>        
    )

    
            
          

}


    







export default GravityButton;