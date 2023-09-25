import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi';
import { BsFillHeartFill } from 'react-icons/bs'

const RecipeCard = (props) => {
            return (
                    <div key={props.id} className='group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden'>
                        <img src={props.img} alt={props.name} className='w-full h-[250px] object-cover rounded-lg
                            hover:brightness-50 transition-all duration-300 '/>
                
                        <a href="#" className='bg-white bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex 
                        justify-center items-center text-orange-700 text-xl absolute top-4 right-4'><BsFillHeartFill/></a>
                        <div className='absolute bg-black text-white py-5 px-5 
                            left-0  h-2/5 w-full rounded-tr-lg rounded-tl-lg -top-20 
                            bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-70 transition-all duration-500'>
                            {props.price}
                            {/* <div>내용보기 / -> 아이콘</div> */}
                            <div className='flex justify-center'>
                                <div className='text-white w-[80px] h-[40px] mt-3 border-solid border-white'>장바구니</div>
                                <div className='text-white w-[80px] h-[40px] mt-3'>주문하기</div>
                            </div>
                        </div>
                        <div className='flex pt-2 pb-6 py-2 px-2'>
                            <p className='font-bold'>{props.title}</p>
                        </div>
                    </div>
  )
}

export default RecipeCard