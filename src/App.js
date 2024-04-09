import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './componets/Main'
import Login from './componets/Login'
import TopNav from './componets/TopNav'
import Footer from './componets/Footer'
import Join from './componets/Join'
import RecipeHome from './componets/RecipeHome'
import Detail from './componets/Detail'
import { weeksRecipe } from './data/data'

const App = () => {
  return (
    <BrowserRouter>
        <div className='flex flex-col justify-between h-screen'>
          <TopNav />
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/recipehome' element={<RecipeHome />} />
            <Route path='/detail/:id' element={<Detail recipe={weeksRecipe} />} />
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App