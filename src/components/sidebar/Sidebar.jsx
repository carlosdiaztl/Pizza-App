import React, {useContext} from 'react'
import { AppContext } from '../App';

const Sidebar = () => {

  const {theme} = useContext(AppContext);

  return (
    <div className={`sidebar sidebar--${theme}`}>Sidebar</div>
  )
}

export default Sidebar