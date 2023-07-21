import React from 'react';
import { useEffect, useState } from 'react';

import Error from '../Error'
import Card from '../../Components/Card';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import '../../Scss/style.scss';

        


function SelectProject() {

    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [newPage, setNewPage] = useState(true);



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
          setNewPage(false)
        };
      };

      fetchProject()
      // eslint-disable-next-line
    }, [newPage]);


  if (error) {
    return <Error />
  } 

    return (
        <div>
        
        {isDataLoading ? (
            <p>Chargement des Données</p>
          ) : (
        
        <div className='globalProjectPage'>
            <Header />



          <div className='containerAllCardsSelectPage' onClick= {() => setNewPage(true)}>
            <h3>Choisissez l'un des <span>projets</span></h3>     
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
            
        </div>


        
        
        )}

        <Footer/>
        </div>
    )

}



export default SelectProject;