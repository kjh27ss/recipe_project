import React, {useState} from 'react'
import { recipeData } from '../data/data';
import RecipeCard from '../card/RecipeCard';


const Recipe = () => {
  const [foods,setFoods] = useState(recipeData);
  const category = (cat) => {
    setFoods(
        recipeData.filter((item) => {
            return item.category == cat;
        })
    )
  }

  return (
    <>
        <div className='max-w-[1540px] mx-auto my-12'>
          <div className='pb-3 pt-9'>
            <h1 className='text-black-500 font-bold text-3xl uppercase tracking-widest text-center py-5'>our recipes</h1>
            <p className='text-gray-500 text-xl text-center pb-3'>맛있는 음식을 만들어보세요.</p>
          </div>
            {/* category */}
            <ul className='flex flex-col lg:flex-row justify-center p-5 mt-9 mb-3'>
                <li className='m-1 p-3 border border-amber-900 text-black
                 hover:bg-amber-700 hover:text-white hover:border-orange-700'
                    onClick={()=>setFoods(recipeData)}>
                    전체보기
                 </li>
                 <li className='m-1 p-3 border border-amber-900 text-black
                 hover:bg-amber-700 hover:text-white hover:border-orange-700'
                   onClick={()=>category("한식")}>
                    한식
                 </li>
                 <li className='m-1 p-3 border border-amber-900 text-black
                 hover:bg-amber-700 hover:text-white hover:border-orange-700'
                 onClick={()=>category("중식")}>
                    중식
                 </li>
                 <li className='m-1 p-3 border border-amber-900 text-black
                 hover:bg-amber-700 hover:text-white hover:border-orange-700' 
                 onClick={()=>category("분식")}>
                    분식
                 </li>
                 <li className='m-1 p-3 border border-amber-900 text-black
                 hover:bg-amber-700 hover:text-white hover:border-orange-700'
                 onClick={()=>category("일식")}>
                    일식
                 </li>
            </ul> {/* category */}
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {foods.map((item)=>(
                    <RecipeCard key={item.id} title={item.title} img={item.img} time={item.time} price={item.price.toLocaleString()}/>                    
                ))}                
            </div>
        </div>
    </>
  )
}

export default Recipe