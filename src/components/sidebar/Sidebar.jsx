import React, {useContext} from 'react'
import { AppContext } from '../App';
import './sidebar.scss'

const Sidebar = () => {
 

  const {theme} = useContext(AppContext);

  return (
    <div className="sidebar">
    <button className='sidebar__favoritas'> Favoritas</button>
    <button className='sidebar__delacasa'> Las de la casa</button>
    <button className='sidebar__recomendadas'> recomendada del mes</button>
    

    </div>
  )
}

export default Sidebar