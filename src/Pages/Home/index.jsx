import React from 'react'
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

import Typewriter from 'typewriter-effect';

import Error from '../Error'
import Header from '../../Components/Header';
import Project from '../../Components/Project';

import '../../Scss/style.scss'


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


  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projectList, setProjectList] = useState([]);



    useEffect(() => {
    async function fetchProject() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/datas.json`)
        const projectList = await response.json()
        setProjectList(projectList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchProject()
  }, []);

  if (error) {
    return <Error />
  } 



  return (
  <div className='globalPage'>
    

    <Header />

    <section id='Accueil'>

      <div className='conteneurBandes'>
        <div className='splitterBande1'>
          <div className='bandeRouge'/>
          <div className='bandeViolette'/>
          <div className='bandeJaune'/>
        </div>
        <div className='splitterBande2'>         
          <div className='bandeBleue'/>
          <div className='bandeVerte'/>
          </div>
      </div>

      <div className='presentation'>

      <p className='helloPresentation'>Bonjour!</p>
      <h2>Je suis <strong>Simon Garbet</strong>,</h2>

      <div className='typeWriterSentence'>
        <p>développeur</p>
          <Typewriter
          options={{
          delay : 500,
          deleteSpeed: 20,
          loop: true,
          wrapperClassName: 'typewriterObject',
          }}
          onInit={(typewriter) => {
          typewriter
          .changeDelay(30)
          .pasteString('<span style="color: #563D7C;"><strong>CSS</strong></span>')
          .pauseFor(1500)
          .deleteChars(6)
          .typeString('<span style="color: #F0DB4F;"><strong> Javascript</strong></span>')
          .pauseFor(1500)
          .deleteChars(13)
          .typeString('<span style="color: #15D7F7;"><strong> React</strong></span>')
          .pauseFor(1500)
          .deleteChars(6)
          .typeString('<span style="color: #90c53f;"><strong> Node</strong></span>')
          .pauseFor(1500)
          .start();
          }}
          />
      </div>

      <p>basé à Bordeaux.</p>

      <a href='#Projets' className='boutonDecouvrir'>Découvrir mes Projets</a>
        
      <div className='buttonLine'>

        <div className = "gravityButton">
          <button >
          <FontAwesomeIcon icon={faGithub} size="lg" className='buttonIcon' style={{color: "#fff",}} />
          </button>
        </div>

        <div className = "gravityButton">
          <button>
          <FontAwesomeIcon icon={faLinkedin} size="lg" className='buttonIcon' style={{color: "#fff",}}/>
          </button>
        </div>

        <div className = "gravityButton">
          <button>
          <FontAwesomeIcon icon={faDiscord} size="lg" className='buttonIcon' style={{color: "#fff", width: '50%', fill: 'var(--_fill, #111)', transition: 'fill 0.3s'}} />
          </button>
        </div>

      </div>

      </div>

    </section>


    <div id='lineProjects'></div>
        
     

    <section id='Projets'>

          {isDataLoading ? (
            <span>Chargement des données</span>
          ) : (
            <div>
            {projectList?.map((project) => (
              <Project
              key = {project.id}
              id = {project.id}
              title = {project.title}
              subtitle = {project.subtitle}
              category = {project.category}
              description = {project.description}
              imageDesktop = {project.imageDesktop}
              imageMobile = {project.imageMobile}
              />
            ))}
            </div>
                  
        )}



    </section>

    <section id='A-propos'>

    </section>

    <section id='Contact'>

    </section>


  </div>

    
  )
}

export default Home