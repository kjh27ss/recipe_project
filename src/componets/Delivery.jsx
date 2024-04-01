import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-stone-500 text-2xl text-center'>
            배달앱을 다운 받으시면 <span className='font-bold ms-3'>배달이 무료!</span>
        </h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src='image/delivery.png' className='w-[500px] mx-auto my-4'/>
                   
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>GET A APP</p>
            
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    매일 다른 레시피 요리 제공
                </h1>
                <p className='mt-2 py-2'>
                    누구나 쉽고 편하게 요리할 수 있도록 다양한 요리와 레시피를 제공합니다.  
                    요리 레시피는 같은 메뉴라도 스타일을 더하거나 다른 식재료를 활용하면 또 다른 레시피가 완성되기 때문에
                    레시피 컨텐츠의 수는 더욱 다양해지고 있습니다.                 
                </p>
                <p className='py-2'>
                    타오르고 넣는 뭇 아름다우냐? 타오르고 피가 가슴에 그들에게 공자는 바이며, 눈이 인생의 부패뿐이다.
                    타오르고 넣는 뭇 아름다우냐? 타오르고 피가 가슴에 그들에게 공자는 바이며, 눈이 인생의 부패뿐이다.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Got Download</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery