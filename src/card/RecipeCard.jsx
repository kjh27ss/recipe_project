import React from 'react'
import { CiStopwatch } from "react-icons/ci";

const RecipeCard = (props) => {
    return (
        <div key={props.id} className='group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden'>
            <img src={props.img} alt={props.name} className='w-full h-[250px] object-cover rounded-lg
                hover:brightness-50 transition-all duration-300 '/>
            <div className='absolute bg-black text-white py-5 px-5 
                left-0  h-3/5 w-full rounded-tr-lg rounded-tl-lg -top-20 
                bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-70 transition-all duration-500'>
                <div className='flex justify-center'>                                
                    <div className='text-white w-[150px] h-[30px] border border-white p-5'>레시피 보기</div>
                </div>
            </div>
            <div className='flex pt-2 pb-3 px-2 justify-center'>
                <h2 className='font-bold pt-2 text-xl'>{props.title}</h2>
            </div>
            <div className='flex justify-center pb-9'>
                <CiStopwatch size={22}/><p className='mx-1'>소요시간<span className='mx-1'>{props.time}분</span></p>
            </div>
        </div>
    )
}

export default RecipeCard