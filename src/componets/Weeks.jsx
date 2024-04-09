import React from 'react'
import { Splide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { weeksRecipe } from '../data/data';
import WeekCard from '../card/WeekCard';
import { Link } from 'react-router-dom';

const Weeks = () => {
  return (
    <>
        <div className='bg-stone-100 py-9'>
            <div className='max-w-[1540px] mx-auto'>
                <div className='pb-9 pt-9'>
                    <h1 className='text-black-500 font-bold text-3xl tracking-widest text-center py-5 uppercase'>one week recipes</h1>
                    <p className='text-gray-500 text-xl text-center pb-7'>한 주 동안 사랑받은 레시피를 확인해 보세요.</p>
                </div>
                <div className='lg:flex-max-w-[1520px] m-auto py-2 px-2'>
                    <Splide
                        options={{
                            perPage: 4,
                            gap : "1.5rem",
                            grag:"free",
                            arrow:false
                        }}
                    >
                    { weeksRecipe.map((item, index) => {
                        return(
                            <Link to={"/detail/" + index}>
                                <WeekCard key={item.id} img={item.img} id={item.id} title={item.title}/>
                            </Link>
                        )
                    })}
                    </Splide>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weeks