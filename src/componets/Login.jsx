import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { ImBubble } from "react-icons/im";
import { SiNaver } from "react-icons/si";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex max-w-[1540px] justify-center items-center mx-auto'>
        <div className="border px-9 py-24">
            <h1 className='text-center text-2xl font-bold'>로그인</h1>
            <div className='flex flex-col'>
                <input type="text" id='userid' className='border border-solid p-3 w-[500px] mt-9' placeholder='아이디' />            
                <input type="password" id='password' className='border p-3 w-[500px] mt-2' placeholder='비밀번호' />
                <div className="flex justify-between py-3 items-center">
                    <div className='flex items-center'>
                        <input id="checkbox" type="checkbox" className="w-4 h-4" />
                        <label for="checkbox" className="text-sm text-gray-900 dark:text-gray-300 mx-1">아이디 저장</label>
                    </div>
                    <div>
                        <span className='border-r-2 text-sm px-2'>아이디 찾기</span>
                        <span className='text-sm ml-2'>비밀번호 찾기</span>
                    </div>
                </div>
                <button className='mt-4 rounded-none p-3 bg-amber-900 text-white font-bold border-none'>로그인</button>
                <Link to={"/join"} className='border mt-2 p-3 text-black font-bold border-amber-900 text-center'>
                    회원가입
                </Link>
                <div className='flex mt-9 justify-center'>
                    <a href="#" title="kakao" className="flex items-center p-4 mr-9 bg-[#FFE812] rounded-full">
                        <ImBubble size="20" color='#000000'/>
                    </a>
                    <a href="#" title="Naver" className="flex items-center p-4 mr-7 bg-[#1EC800] rounded-full">
                        <SiNaver size="20" color='white'/>
                    </a>
                    <a href="#" title="Facebook" className="flex items-center p-4 bg-[#3860BF] rounded-full">
                        <FaFacebookF size="20" color='white'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login