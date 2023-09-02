import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>  
        <div>
            <Link to={'/'} >Logo</Link>
        </div>
        <div>
            <Link to={'/'} >Home</Link>
            <Link to={'/create-recipe'}> Create Recipe </Link>
            <Link to={'/saved-recipes'}> Saved Recipe </Link>
            <Link to={'/auth'}> Login/Register </Link>
        </div>
    </nav>
  )
}

export default NavBar