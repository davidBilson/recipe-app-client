import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import SavedRecipes from './pages/SavedRecipes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/auth" element={<Auth />} ></Route>
        <Route path="/create-recipe" element={<CreateRecipe />} ></Route>
        <Route path="/saved-recipes" element={<SavedRecipes />} ></Route>
      </Routes>
    </>
  )
}

export default App