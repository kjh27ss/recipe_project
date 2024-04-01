import React from 'react'
import CategoryCard from '../card/CategoryCard'
import { category } from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1540px] m-auto py-9 mb-9'>
        <h1 className='text-black-500 font-bold text-3xl uppercase tracking-widest text-center py-5'>
            category
        </h1>
        <div className='grid grid-cols2 md:grid-cols-6 gap-5 py-9 px-2'>
            {
                category.map(item => (
                    <CategoryCard key={item.id} name={item.name} img={item.img}/>
                ))
            }
        </div>
    </div>
  )
}

export default Category