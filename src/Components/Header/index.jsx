import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import '../../Scss/style.scss'


function Header(){
    return (
        <section className='header'>
            <div className='logo'>
            <FontAwesomeIcon icon={faCircle} style={{color: '#ff5925', }} />
            <h1>Simon Garbet</h1>
            </div>
            <nav>
                <a href='#AboutMe'>A propos</a>
                <a href='#lineProjects'>Projets</a>
                <a href='#Contact'>Contact</a>
            </nav>
        </section>
    )
}

export default Header;