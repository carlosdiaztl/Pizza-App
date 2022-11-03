import React from 'react'
import { Outlet } from 'react-router-dom'

const SearchPizzas = () => {
  return (
    <div><h1> Busca tu pizza</h1>
    <Outlet/>
    
    </div>
  )
}

export default SearchPizzas