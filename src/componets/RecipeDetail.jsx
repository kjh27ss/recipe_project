import React from 'react'
import { useParams } from 'react-router-dom'
import { CiShare2 } from "react-icons/ci";

const RecipeDetail = (props) => {
  const {id} = useParams();
  const product = props.recipe[id];

  // 이미지 경로 설정
  const image = product.img;
  const url = '../';
  const imgurl = url + image;
  
  return (
    <div className='max-w-[1540px] mx-auto'>
        <img src={imgurl} alt={product.title} className='w-full h-[600px] object-cover border'/>
        <div className='border-b-2 pb-10'>
          <div className='flex justify-between items-center pt-9'>
            <h1 className='font-bold text-2xl'>{product.title}</h1>
            <p><CiShare2 size={24}/>공유</p>
          </div>
          <div className='flex items-center mt-5'>
            <p className='mr-9'>난이도{product.difficulty}</p>
            <p><span className='mr-2'>소요시간</span>{product.time}시간</p>
          </div>
        </div>
        <div className='mt-9'>
          <div>
            <h1 className='border-b-4 border-amber-900 pb-5 text-xl font-bold'>재료</h1>
            <p className='mt-5'>{product.material}</p>
          </div>
          <div className='pt-10'>
            <h1 className='border-b-4 border-amber-900 pb-5 text-xl font-bold'>레시피</h1>
            <p>{product.content}</p>
          </div>
        </div>
    </div>
  )
}

export default RecipeDetail