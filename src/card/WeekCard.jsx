import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

import { BsFillHeartFill } from 'react-icons/bs'

const WeekCard = (props) => {
            return (
                    <SplideSlide> 
                        <div className='bg-gray-100 mb-10 max-w-sm rounded relative overflow-hidden drop-shadow-md transition duration-500 ease-in-out hover:drop-shadow-xl'>
                            <img className='w-full' src={props.img} alt={props.title}/>
                            <div className='px-6 py-5'>
                                <p className='px-2 pt-2 font-bold text-xl mb-2 truncate'>
                                    {/* {wdate}<br/> */}
                                    {props.title}
                                </p>
                                <p className='px-2 pb-5'>{props.price}원</p>
                                <div className='flex justify-between align-middle'>
                                    <button className='bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-300 rounded'>
                                        레시피보기
                                    </button>
                                    <button className='bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 border border-gray-300 rounded'>
                                        장바구니
                                    </button>
                                    <a href='#'><BsFillHeartFill className="text-2xl text-orange-700" style={{"marginTop":"10px"}}/></a>
                                </div>
                            </div>                        
                        </div>
                    </SplideSlide>
  )
}

export default WeekCard