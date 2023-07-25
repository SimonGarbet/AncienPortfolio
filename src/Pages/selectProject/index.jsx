import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Error from '../Error'
import Card from '../../Components/Card';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import '../../Scss/style.scss';

        


function SelectProject() {

    const [isDataLoading, setDataLoading] = useState(true);
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
        };
      };

      fetchProject()
    }, []);


  if (error) {
    return <Error />
  } 

    return (
        <div>
        
        {isDataLoading ? (
            <p>Chargement des Données</p>
          ) : (
        
        <div className='globalSelectPage'>
            <Header />


            <div className='librarySelectPage'>
            <h3>Choisissez l'un des <span>projets</span></h3> 
          <div className='containerAllCardsSelectPage'>
                
            {projectList?.map((project) => (
            <Link to ={`/projet/${project.id}`}
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

        <Footer/>
        </div>
    )

}



export default SelectProject;