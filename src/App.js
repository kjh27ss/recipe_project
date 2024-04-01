import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './componets/Main'
import Login from './componets/Login'
import TopNav from './componets/TopNav'
import Footer from './componets/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <div className='flex flex-col justify-between h-screen'>
          <TopNav />
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App