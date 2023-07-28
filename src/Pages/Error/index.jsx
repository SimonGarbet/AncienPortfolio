import { Link } from 'react-router-dom'


function Error() {
  return (
    <div>
      <section className = 'errorMessage'>
      <h2>404</h2>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to="/" className= 'homeLink'>Retourner sur la page d'accueil</Link>
      </section>
    </div>
  )
}

export default Error