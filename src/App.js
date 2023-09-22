import React from 'react'
import TopNav from './componets/TopNav'
import Slide from './componets/Slide'
import Delivery from './componets/Delivery'
import Weeks from './componets/Weeks'
import Recipe from './componets/Recipe'

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Slide />
      <Delivery />
      <Weeks />
      <Recipe />
    </div>
  )
}

export default App