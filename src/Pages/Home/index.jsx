import React from 'react'
import { useEffect, useState } from 'react';

import Error from '../Error'
import Banner from '../../Components/Banner';
import AboutMe from '../../Components/AboutMe';
import Summary from '../../Components/Summary';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss'




function Main() {

  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projectList, setProjectList] = useState([]);



    useEffect(() => {
    async function fetchProject() {
      setDataLoading(true)
      try {
        const response = await fetch(`/datas/achievements.json`)
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
  <div className='globalHomePage'>

    <Banner /> 

    <div id = 'lineAboutMe'></div>

    <AboutMe />

    
        
    <section id='Projects'>
          {isDataLoading ? (
            <span>Chargement des données</span>
          ) : (
            <div>
            {projectList?.map((project) => (
              <Summary
              key = {project.id}
              id = {project.id}
              maincolor = {project.maincolor}
              title = {project.title}
              subtitle = {project.subtitle}
              category = {project.category}
              githubLink={project.githubLink}
              summary = {project.summary}
              imageDesktop = {project.imageDesktop}
              imageMobile = {project.imageMobile}
              />
            ))}
            </div>                 
        )}

          <a href='#header' className='scrollTop'>
                <FontAwesomeIcon icon={faChevronUp} style={{color: "#fff",}} />
                <FontAwesomeIcon icon={faChevronUp} style={{color: "#fff",}} />
          </a>

      
      </section>



  </div>

    
  )
}

export default Main