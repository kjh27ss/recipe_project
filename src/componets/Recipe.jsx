import React, {useState} from 'react'
import { recipeData } from '../data/data';
import RecipeCard from '../card/RecipeCard';


const Recipe = () => {
  const [foods,setFoods] = useState(recipeData);

  // category
//   const category = foods.filter(it => it.category.includes("분식"));
//   console.log(category);

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
            <h1 className='text-orange-500 font-bold text-2xl text-center py-3'>상품목록</h1>
            
            {/* category */}
            <div className='flex flex-col lg:flex-row justify-center mt-5 mb-3'>
                <button className='m-1 border-orange-700 text-white bg-orange-700
                 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'
                    onClick={()=>setFoods(recipeData)}>
                    전체보기
                 </button>
                 <button className='m-1 border-orange-700 text-white bg-orange-700
                 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'
                   onClick={()=>category("한식")}>
                    한식
                 </button>
                 <button className='m-1 border-orange-700 text-white bg-orange-700
                 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' 
                 onClick={()=>category("중식")}>
                    중식
                 </button>
                 <button className='m-1 border-orange-700 text-white bg-orange-700
                 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' 
                 onClick={()=>category("분식")}>
                    분식
                 </button>
                 <button className='m-1 border-orange-700 text-white bg-orange-700
                 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' 
                 onClick={()=>category("일식")}>
                    일식
                 </button>
            </div> {/* category */}

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {foods.map((item)=>(
                    <RecipeCard key={item.id} title={item.title} img={item.img} price={item.price.toLocaleString()}/>
                    
                ))}
                
            </div>
        </div>
    </>
  )
}

export default Recipe