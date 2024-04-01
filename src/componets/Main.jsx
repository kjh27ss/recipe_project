import React from 'react'
import Slide from './Slide'
import Delivery from './Delivery'
import Weeks from './Weeks'
import Recipe from './Recipe'
import Category from './Category'

const Main = () => {
  return (
    <>
      <div className="flex-l">
        <Slide />
        <Delivery />
        <Weeks />
        <Recipe />
        <Category />
      </div>
    </>
  )
}

export default Main