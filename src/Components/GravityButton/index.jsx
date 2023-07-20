import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss';



function GravityButton({logo, size, color}){
  

    useEffect(() => {


        document.querySelectorAll('.gravityButton').forEach(btn => {
       
        btn.addEventListener('mousemove', (e) => {
           
           const rect = btn.getBoundingClientRect();    
           const h = rect.width / 2;
           
           const x = e.clientX - rect.left - h;
           const y = e.clientY - rect.top - h;
       
           const r1 = Math.sqrt(x*x+y*y);
           const r2 = (1 - (r1 / h)) * r1;
       
           const angle = Math.atan2(y, x);
           const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
           const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
           
           const op = (r2 / r1) + 0.25;
       
           btn.style.setProperty('--tx', `${tx}px`);
           btn.style.setProperty('--ty', `${ty}px`);
           btn.style.setProperty('--opacity', `${op}`);
         });
       
         btn.addEventListener('mouseleave', (e) => {
           btn.style.setProperty('--tx', '0px');
           btn.style.setProperty('--ty', '0px');
           btn.style.setProperty('--opacity', `${0.25}`);
         });
       
       
       });
       
       }, []);

       const [animation, setAnimation] = useState(false);

    useEffect(() => {

        if (animation === true) {
        setTimeout(() => {setAnimation(false)}, "2000" )
        }
        
      }, [animation]);


    return (
      <div onClick={() => setAnimation(true) } className = {animation ? 'gravityCopied' : 'gravityButton'}>
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