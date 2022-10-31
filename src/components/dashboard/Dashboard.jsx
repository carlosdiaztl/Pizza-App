import React, {useContext} from 'react'
import { AppContext } from '../App'

const Dashboard = () => {

  const {theme} = useContext(AppContext);

  return (
    <div className={`dashboard dashboard--${theme}`}>Dashboard</div>
  )
}

export default Dashboard