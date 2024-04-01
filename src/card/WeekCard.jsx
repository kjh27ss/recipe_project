import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const WeekCard = (props) => {
    return (
        <SplideSlide> 
            <div className='mb-10 max-w-sm rounded relative overflow-hidden drop-shadow-md transition duration-500 ease-in-out hover:drop-shadow-xl'>
                <img className='w-full' src={props.img} alt={props.title}/>
                <div className='px-6 py-5'>
                    <p className='px-2 pt-2 absolute top-9 font-bold text-white text-xl mb-2 truncate'>
                        {props.title}
                     </p> 
                </div>                        
            </div>
        </SplideSlide>
    )
}

export default WeekCard