import { Link } from 'react-router-dom'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'


function Error() {
  return (
    <div>
      <Header />
      <section className = 'errorMessage'>
      <h2>404</h2>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to="/" className= 'homeLink'>Retourner sur la page d'accueil</Link>
      </section>
      <Footer />
    </div>
  )
}

export default Error