import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Error from '../Error'
import Card from '../../Components/Card';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import GravityButton from '../../Components/GravityButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../Scss/style.scss';

        


function PageProjet() {

    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [projectTarget, setProjectTarget] = useState([]);
    const [newPage, setNewPage] = useState(true)


    const idProject = useParams();

    


    useEffect(() => { 
      async function fetchProject() {
        setDataLoading(true)
        try {
          const response = await fetch(`http://localhost:3000/datas/projects.json`)
          const projectList = await response.json()
          setProjectList(projectList)
          setProjectTarget(projectList.filter((profile) => profile.id === idProject.id))
          setProjectList(projectList.filter((profile) => profile.id !== idProject.id))
        } catch (err) {
          console.log('===== error =====', err)
          setError(true)
        } finally {
          setDataLoading(false)
          setNewPage(false)
        };
      };

      fetchProject()
      // eslint-disable-next-line
    }, [newPage]);

    console.log(projectTarget)


  if (error) {
    return <Error />
  } 

  if (projectTarget[0]?.id !== idProject.id && isDataLoading === false) {
    return <Error />
  } else {
    return (
        <div>
        
        {isDataLoading ? (
            <p>Chargement des Données</p>
          ) : (
        
        <div className='globalProjectPage'>
            <Header />

            <div className='containerAllCards' onClick= {() => setNewPage(true)}>
            <h3>Un autre <span>Projet </span>?</h3>     
            {projectList?.map((project) => (
                  <Card 
                  key={project.id}
                  id={project.id}
                  title = {project.title}
                  subtitle = {project.subtitle}
                  maincolor = {project.maincolor}
                  imageFond = {project.vignette}
                  />            
              ))}                      
            </div>


            <div className='projectPageTitle'>

              <div className='projectTitleGithubSubtitle'>
              <div className='projectTitleGithub'>
                <h2>{projectTarget[0].title}</h2>
                <a href={projectTarget[0].githubLink} target="_blank" rel="noopener noreferrer">
                <GravityButton 
                key = 'GravityButtonGithub'
                logo = {faGithub}
                size = 'lg'
                color = '#fff'
                />
                </a>
              </div>
                  <p className='subtitleProjectPage'>{projectTarget[0].subtitle}</p>
              </div>

              <p className='descriptionProjectPage'>{projectTarget[0].description}</p>            

            </div>

            <div className='skillSection'>
              <p>Skills</p>
              {projectTarget[0].skills.map((skill) => (
                <p key={skill.id}>{skill.body}</p>
              ))}
            </div>
            
            <div className='globalPicturePageProject'>

              <div className='totalDesktopPicture'>
                {projectTarget[0].imagesPageProject.Desktop.map((profile) => (
                  <img key={profile.id} src ={profile.url} alt ="Screenshot Desktop du site web en version Desktop" />
                ))}
              </div>

              <div className='totalMobilePicture'>
                {projectTarget[0].imagesPageProject.Mobile.map((profile) => (
                  <img key={profile.id} src ={profile.url} alt ="Screenshot Desktop du site web en version Mobile"/>
                ))}
              </div>

            </div>
            
        </div>
        
        
        )}
        <Footer/>
        </div>
    )

}

}

export default PageProjet