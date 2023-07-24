import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss'




function Header(){

  const [isOver, setIsOver] = useState(false);

  useEffect(() => {},[isOver]);



    return (
        <section id='header'>
            <NavLink to = {`/`} className='logo' onOver onMouseEnter ={() => setIsOver(true)}  onMouseLeave={() => setIsOver(false)}>
            <FontAwesomeIcon icon = {isOver ? faSquare : faCircle}  style= {{color: isOver ? '#90c53f' : '#ff5925', }} />
            <h1>Simon Garbet</h1>
            </NavLink>
            <nav>
            <NavLink to = {`/`} style={({ isActive }) =>
            isActive
            ? { color : "#ff5925" , fontWeight : "700" ,textDecoration: 'none' }
            : { color : "#111", fontWeight : "500", textDecoration: 'none' }
          }>Home</NavLink>
            <NavLink to = {`/projet`} style={({ isActive }) =>
            isActive
            ? { color : "#ff5925" , fontWeight : "700" ,textDecoration: 'none' }
            : { color : "#111", fontWeight : "500", textDecoration: 'none' }
          }>Projets</NavLink>
            </nav>
        </section>
    )
    

 
}

export default Header;