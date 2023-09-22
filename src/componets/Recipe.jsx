import React, {useState} from 'react'
import { HiArrowSmRight } from 'react-icons/hi';
import { recipeData } from '../data/data';
import { BsFillHeartFill } from 'react-icons/bs'

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
                    <div key={item.id} className='group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden'>
                        <img src={item.img} alt={item.name} className='w-full h-[250px] object-cover rounded-lg
                            hover:brightness-50 transition-all duration-300 '/>
                
                        <a href="#" className='bg-white bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex 
                        justify-center items-center text-orange-700 text-xl absolute top-4 right-4'><BsFillHeartFill/></a>
                        <div className='absolute bg-black text-white py-5 px-5 
                            left-0  h-2/5 w-full rounded-tr-lg rounded-tl-lg -top-20 
                            bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-70 transition-all duration-500'>
                            {item.price}
                            {/* <div>내용보기 / -> 아이콘</div> */}
                            <div className='flex justify-center'>
                                <div className='text-white w-[80px] h-[40px] mt-3 border-solid border-white'>장바구니</div>
                                <div className='text-white w-[80px] h-[40px] mt-3'>주문하기</div>
                            </div>
                        </div>
                        <div className='flex pt-2 pb-6 py-2 px-2'>
                            <p className='font-bold'>{item.title}</p>
                        </div>
                    </div>
                    
                ))}
                
            </div>
        </div>
    </>
  )
}

export default Recipe