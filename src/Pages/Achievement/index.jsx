import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Error from '../Error'
import Card from '../../Components/Card';
import Collapse from '../../Components/Collapse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faListUl, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';

import '../../Scss/style.scss';

        


function ProjectPage() {

    const [isDataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [projectTarget, setProjectTarget] = useState([]);


    const idProject =useParams();



    useEffect(() => { 
      async function fetchProject() {
        setDataLoading(true)
        try {
          const response = await fetch(`/datas/achievements.json`)
          const projectList = await response.json()
          setProjectList(projectList)
          setProjectTarget(projectList.filter((profile) => profile.id === idProject.id))
          setProjectList(projectList.filter((profile) => profile.id !== idProject.id))
        } catch (err) {
          console.log('===== error =====', err)
          setError(true)
        } finally {
          setDataLoading(false)
        };
      };

      fetchProject()
    }, [idProject.id]);


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



            <div className='projectPageTitle' >

              <div className='projectTitleGithub'>
                <h2>{projectTarget[0].title}</h2>
                <p className='subtitleProjectPage'>{projectTarget[0]?.subtitle}</p>             
                <a href={projectTarget[0].githubLink} target="_blank" rel="noopener noreferrer">
                  <p>Github</p>
                <FontAwesomeIcon icon={faGithub} />
                </a>
                {(projectTarget[0]?.figmaLink === "") ?
                (<div></div>) :
                (<a className='figmaLinkProject' href={projectTarget[0]?.figmaLink} target="_blank" rel="noopener noreferrer">
                  <p>Figma</p>
                <FontAwesomeIcon icon={faFigma} />
                </a>)}
              </div>

              <div className='skillSection'>
                <div>
              <FontAwesomeIcon icon={faWrench} style={{color: `${projectTarget[0].maincolor}`,}}/>
              <h3>Skills</h3>
              </div>
              {projectTarget[0].skills.map((skill) => (
                <p key={skill.id}> <FontAwesomeIcon icon={faArrowRight} style={{color: `${projectTarget[0].maincolor}`,}} /> {skill.body}</p>
              ))}
            </div>
              
            </div>

            <div className='descriptionProjectPage'>
            <div>
            <FontAwesomeIcon icon={faListUl} style={{color: `${projectTarget[0].maincolor}`,}}/>
            <h3>Description</h3>
            </div>
                {projectTarget[0].description.map((sentence) => (
                <p key={sentence.id}><FontAwesomeIcon icon={faCircle} size = '2xs' style={{color: `${projectTarget[0].maincolor}`,}} /> {sentence.body}</p>
                ))}      
              </div>
            
            <div className='globalPicturePageProject'>

           
                <div className='totalDesktopPicture' >
                  
                {projectTarget[0].imagesPageProject.Desktop.map((profile) => (
                  <Collapse 
                  key={profile.id}
                  title='Screen Desktop'
                  imagesrc ={profile.url}
                  maincolor={projectTarget[0].maincolor} />
                  ))}
              </div>

              <div className='totalMobilePicture'>
              {projectTarget[0].imagesPageProject.Mobile.map((profile) => (
                <Collapse 
                key={profile.id}
                title='Screen Mobile'
                imagesrc ={profile.url}
                maincolor={projectTarget[0].maincolor}
                />
              ))}
        
              </div>

            </div>


          <div id='lineProjects'></div>

          <div className='libraryProjects'>
          <h3>Un autre <span>Projet </span>?</h3>     
          <div className='containerAllCards'>
            
            {projectList.map((project) => (
            <Link to ={`/achievement/${project.id}`}
            key={project.id}
            onClick = {() => setDataLoading(true)}>
            <Card
            key={project.id}
            id={project.id}
            title = {project.title}
            subtitle = {project.subtitle}
            maincolor = {project.maincolor}
            imageFond = {project.vignette}
            />
          </Link>            
            ))}                    
          </div>
          </div>
            
        </div>


        
        
        )}
        </div>
    )

}

}

export default ProjectPage;