import React from 'react'
import { useEffect, useState } from 'react';

import Error from '../Error'
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import AboutMe from '../../Components/AboutMe';
import Project from '../../Components/Project';
import Footer from '../../Components/Footer'

import '../../Scss/style.scss'




function Main() {

  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projectList, setProjectList] = useState([]);



    useEffect(() => {
    async function fetchProject() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/datas/projects.json`)
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
    

    <Header />

    <Banner /> 

    <div id = 'lineAboutMe'></div>

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
              githubLink={project.githubLink}
              summary = {project.summary}
              imageDesktop = {project.imageDesktop}
              imageMobile = {project.imageMobile}
              />
            ))}
            </div>                 
        )}
      </section>

  <Footer />

  </div>

    
  )
}

export default Main