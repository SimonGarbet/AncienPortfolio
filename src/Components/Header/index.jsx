import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDiamond, faSquare, faPlay, faShield } from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss'


function Header(){
    return (
        <section id='header'>
            <Link to = {`/`} className='logo'>
            <FontAwesomeIcon icon={faCircle} style={{color: '#ff5925', }} />
            <h1>Simon Garbet</h1>
            </Link>
            <nav>
            <a href ='#header' className='coloredNavLink'>Home</a>
            <a href='#lineAboutMe'>A propos</a>
            <a href='#lineProjects'>Projets</a>
            </nav>
        </section>
    )
    

 
}

export default Header;