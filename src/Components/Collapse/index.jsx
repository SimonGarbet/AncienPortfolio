import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import '../../Scss/style.scss'



function Collapse({ title, imagesrc, maincolor }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [isOpen])

    return (
        <div className='containerCollapse' style={{ background: `${maincolor}`}} onClick={() => setIsOpen(!isOpen)}>
          <div>
          <h3>{title}</h3>
          <FontAwesomeIcon icon={faChevronUp} style={{ transform: isOpen ? 'rotate(0)' : 'rotate(180deg)'}}/>
          </div>
          <img className='screenshotFullCollapse' src ={imagesrc} style={{ display: isOpen ? 'block' : 'none' , border: `3px solid ${maincolor} `}} alt = "Screenshot du site en grande taille"/>
        </div>
      
    )
  }


export default Collapse