import React, {useContext} from 'react'
import { AppContext } from '../App';

const Sidebar = () => {
 

  const {theme} = useContext(AppContext);

  return (
    <div className="sidebar">Sidebar
    <button> Favoritas</button>
    <button> Las de la casa</button>
    <button> recomendada del mes</button>
    

    </div>
  )
}

export default Sidebar