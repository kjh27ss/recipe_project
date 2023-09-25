import React from 'react'

const CategoryCard = ({id,name,img}) => {
  return (
    
    <a href='#' className='p-4 flex flex-col justify-center items-center border-1 shadow-lg
        transition-all duration-300 rounded-xl hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:bg-slate-100'>
        <img src={img} alt={name} className='w-[120px] h-[120px] object-cover border-4 rounded-full'/>
        <p className='text-center pt-2'>
            {name}
        </p>
    </a>
  )
}

export default CategoryCard