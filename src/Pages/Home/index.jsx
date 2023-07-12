import React from 'react'
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faGolfBallTee, faPoo } from '@fortawesome/free-solid-svg-icons'

import Typewriter from 'typewriter-effect/dist/core';

import '../../Scss/home.scss'


function Home() {

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

});

useEffect(() => {

  const txtAnim = document.querySelector('h1');

  new Typewriter(txtAnim, {
    delay : 500,
    deleteSpeed: 20,
    loop: true,
  })
  .changeDelay(30)
  .typeString('Je suis Simon Garbet,')
  .pauseFor(1500)
  .typeString(' Dev Front-End !')
  .pauseFor(1500)
  .deleteChars(12)
  .typeString(' HTML !')
  .pauseFor(1500)
  .deleteChars(7)
  .typeString(' CSS !')
  .pauseFor(1500)
  .deleteChars(6)
  .typeString(' JavaScript !')
  .pauseFor(1500)
  .deleteChars(13)
  .typeString(' React !')
  .start()

});




  return (
    <section >
        
      <h1></h1>
      

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad veniam praesentium harum, eveniet necessitatibus ratione impedit assumenda, hic beatae nam numquam omnis non sequi eum delectus voluptate qui quod.</p>
    
      <div className='buttonLine'>

      <div className = "gravityButton">
  <button >
  <FontAwesomeIcon icon={faBath} style={{color: "#b81919",}} />
  </button>
    </div>

<div className = "gravityButton">
  <button>
  <FontAwesomeIcon icon={faPoo} className='buttonIcon' style={{color: "#19BE2C",}}/>
  </button>
</div>

<div className = "gravityButton">
  <button>
  <FontAwesomeIcon icon={faGolfBallTee} className='buttonIcon' style={{color: "#198CBE", width: '50%', fill: 'var(--_fill, #111)', transition: 'fill 0.3s'}} />
  </button>
</div>

</div>


    </section>
  )
}

export default Home