import React,{useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { FaUser } from "react-icons/fa";
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);

    return (
        // <div className="max-w-[1520px] mx-auto flex items-center p-4">
        <div className="max-w-[1540px] flex justify-between p-4 mx-auto">
            <div className="flex items-center w-[800px]">
                <div onClick={()=>setSideNav(!sideNav)} className="cursor-pointer pr-4">
                    <AiOutlineMenu size={25} />
                </div>
                <Link to={"/"}>
                    <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2 uppercase tracking-tighter">logo</h1>     
                </Link>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mx-3 text-[14px]">
                    <p className="bg-amber-900 text-white rounded-full text-bold">
                        FREE
                    </p>
                    <p className="p-2 mx-1 text-bold">Delivery</p>
                </div>
            </div>
            <div className='flex items-center'>
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="레시피검색" />
            </div>
            
                <button className='p-0 border-none mx-9'>
                    <BsFillCartFill size={20}/>
                </button>            
                <Link to={"/login"}>
                    <FaUser size={20}/>
                </Link>
            </div>
        
        {/* sidenav */}
        {sideNav ? (
            <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" 
            onClick={()=>setSideNav(!sideNav)}></div>
        ) : ("")}
        <div className={sideNav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":
            "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
        >
            <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={25}
                className="absolute right-4 top-4 cursor-pointer" />
            <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2 uppercase tracking-tighter my-3 ml-2">Cookple</h1>
            <nav>
                <ul className='flex flex-col p-4 text-gray-900'>
                    <li className='text-xl py-4 flex'>
                        <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Account
                    </li>
                    <li className='text-xl py-4 flex'>
                        <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full' />
                        배송조회
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Favorite
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' />
                        내 지갑
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp size={25} className='mr-4 text-white bg-black rounded-full' />
                        Help
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default TopNav