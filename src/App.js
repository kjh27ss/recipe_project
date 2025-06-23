import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter as Routes, Route } from 'react-router-dom'
import Main from './componets/Main'
import Login from './componets/Login'
import TopNav from './componets/TopNav'
import Footer from './componets/Footer'
import Join from './componets/Join'
import Detail from './componets/Detail'
import { weeksRecipe } from './data/data'
import { recipeData } from './data/data'
import RecipeDetail from './componets/RecipeDetail'

const App = () => {
  return (
    <HashRouter>
        <div className='flex flex-col justify-between h-screen'>
          <TopNav />
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/detail/:id' element={<Detail weeks={weeksRecipe} />} />
            <Route path='/recipedetail/:id' element={<RecipeDetail recipe={recipeData} />} />
          </Routes>
          <Footer/>
        </div>
    </HashRouter>
  )
}

export default App