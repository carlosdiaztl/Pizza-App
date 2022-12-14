import React, {useContext} from 'react'
import { pizzasCategory } from '../../services/pizzasCategory';
import { AppContexts } from '../App';
import './sidebar.scss'

const Sidebar = () => {
 

  const {theme,setPizzas } = useContext(AppContexts);
const filtrar= async(busqueda)=>{
  if (busqueda==="favoritas") {
    console.log('fav');
    const search= await pizzasCategory('favoritas')
    console.log(search);

    
  }
  if(busqueda==="lacasa"){
    console.log('casa');

  }
  if(busqueda==="mes"){
    console.log('mes');

  }

}
  return (
    <div className="sidebar">
    <button className='sidebar__favoritas' onClick={()=>{filtrar('favoritas')} }> Favoritas</button>
    <button className='sidebar__delacasa' onClick={()=>{filtrar('lacasa')} } > Las de la casa</button>
    <button className='sidebar__recomendadas' onClick={()=>{filtrar('mes')} }> recomendada del mes</button>
    

    </div>
  )
}

export default Sidebar