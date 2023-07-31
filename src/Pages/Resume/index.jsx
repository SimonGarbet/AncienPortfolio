import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faEnvelope, faLocationDot, faBriefcase, faSquarePlus, faGraduationCap, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import imageProfil from '../../Assets/imageProfil.jpg'

import '../../Scss/style.scss'




function Resume(){



    return (
        <section className='resumeGlobal'>

            <div className='enteteCV'>
            
            <div className='infosGeneralesCV'>
                <h2>Simon Garbet</h2>
                <h4>Développeur Web Front-End</h4>
                <div><FontAwesomeIcon icon={faLocationDot} /> <p>33000 Bordeaux</p></div>
                <div><FontAwesomeIcon icon={faEnvelope} /> <p>simon.garbet@gmail.com</p></div>
                <div><FontAwesomeIcon icon={faCar} /> <p>Permis B et véhiculé</p></div>
            </div>

            <img src={imageProfil} alt = "Photographie de Simon Garbet" />

            </div>

            <div className='splitterCV'>
            <div className='leftSideCV'>
            <div className='formationCV'>
                <h3><FontAwesomeIcon icon={faGraduationCap} /> Formation</h3>
                <div>
                    <h4>Formation Développeur Web</h4>
                    <h5>Centre de formation OpenClassrooms</h5>
                    <p className='dateFormationCV'>2023</p>
                    <p>Diplôme de niveau 5 Validé</p>
                </div>

                <div>
                    <h4>Formation BNSSA</h4>
                    <h5>GPNS Auch</h5>
                    <p className='dateFormationCV'>2022</p>
                    <p>Diplôme Validé et PSE2 à jour</p>
                </div>

                <div>
                    <h4>Formation Ingénieur Génie Civil</h4>
                    <h5>Insa Toulouse</h5>
                    <p className='dateFormationCV'>2013-2016</p>
                </div>

                <div>
                    <h4>Baccalaureat STI2D Architecture</h4>
                    <h5>Lycée Jean Dupuy</h5>
                    <p className='dateFormationCV'>2013</p>
                    <p>Diplôme de niveau 4 Validé</p>
                </div>

                <div>
                    <h4>Baccalaureat S Spé Maths</h4>
                    <h5>Lycée Pardailhan</h5>
                    <p className='dateFormationCV'>2012</p>
                    <p>Diplôme de niveau 4 Validé</p>
                </div>


            </div>

            <div className='plusCV'>
                
                <h3><FontAwesomeIcon icon={faSquarePlus} /> Les Plus</h3>

                    <p>Aime le travail d'équipe</p>
                    <p>Curieux</p>
                    <p>Bonne capacité d'apprentissage</p>                 
                    <p>Autonome</p>
                    <p>Sportif</p>                       
    
            </div>

            </div>

            <div className='rightSideCV'>

            <div className='xpProCV'>

                <h3><FontAwesomeIcon icon={faBriefcase} /> Expérience</h3>

                <figure>
                    <div className='titreXpProCV'>
                        <h4>Lifeguard Secouriste</h4>
                        <p>Juillet - Septembre 2022</p>
                    </div>

                    <h5>Camping Silbu Gastes</h5>
                    <p>Contrat Saisonnier</p>
                </figure>

                <figure>
                    <div  className='titreXpProCV'>
                        <h4>Préparateur de Commandes</h4>
                        <p>Juin 2021 - Mai 2022</p>
                    </div>

                    <h5>Gers Equipement</h5>
                    <p>Contrat CDD</p>
                </figure>

                <figure>
                    <div  className='titreXpProCV'>
                        <h4>Bénévole Restos du Coeur</h4>
                        <p>Mars - Juin 2021</p>
                    </div>

                    <h5>Restos du Coeur Auch</h5>
                    <p>Bénévolat</p>
                </figure>

                <figure>
                    <div  className='titreXpProCV'>
                    <h4>Préparateur de Commandes</h4>
                        <p>Sept 2018 - Mars 2019</p>
                    </div>

                    <h5>Gers Equipement</h5>
                    <p>Contrat CDD</p>
                </figure>


            </div>

            <div className='competencesCV'>
                <h3> <FontAwesomeIcon icon={faScrewdriverWrench} /> Compétences</h3>
                <div className='competencesContainerCV'>

                    <div>
                        <h4>CSS</h4>
                        <p>6 mois de pratique</p>
                    </div>

                    <div>
                        <h4>React</h4>
                        <p>Deux Réalisations</p>
                    </div>

                    <div>
                        <h4>ExpressJS</h4>
                        <p>Une Réalisation</p>
                    </div>

                    <div>
                        <h4>Github</h4>
                        <p>6 mois de pratique</p>
                    </div>

                    <div>
                        <h4>Excel</h4>
                        <p>Très bonnes notions</p>
                    </div>

                    <div>
                        <h4>Anglais</h4>
                        <p>Niveau B1</p>
                    </div>

                    <div>
                        <h4>Secourisme</h4>
                        <p>1 année d'expérience</p>
                    </div>


                </div>


            </div>


            </div>

           

            </div>

           
            


        </section>
    )
    

 
}

export default Resume;