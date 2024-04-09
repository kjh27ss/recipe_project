import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeHome = () => {
    const params=useParams();
    console.log(params);
  return (
    <div className='max-w-[1540px] mx-auto'>
        <div className="border">
            
        </div>
    </div>
  )
}

export default RecipeHome