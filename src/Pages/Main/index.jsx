import React from 'react'
import { useEffect, useState } from 'react';

import Error from '../Error'
import Header from '../../Components/Header';
import Home from '../../Components/Home';
import AboutMe from '../../Components/AboutMe';
import Project from '../../Components/Project';

import '../../Scss/style.scss'


function Main() {

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

    <Home /> 

    <AboutMe />


    <div id='lineProjects'></div>
        
    <section id='Projects'>

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



  </div>

    
  )
}

export default Main