
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { indiaFlag, logo } from '../assets/Index'
import { allItems } from '../constants';
import HeaderBottom from './HeaderBottom';
// import { Link } from 'react-router-dom';



const Header = () => {
  const [showAll, setShowlAll] = useState(false);

  

  
  return (
    <div className='w-full sticky top-0 z-50'>
      <div className="w-full bg-amazon_light text-white px-4 py-2 flex items-center gap-3">
       {/* ================= Image Start here ================= */}
        <div className="px-2 h-[80%] flex items-center border border-transparent 
        hover:border-white cursor-pointer duration-100">
          <img  className="w-24 mt-2" src={logo} alt="logo" />
        </div>
       {/* ================= Image End here ================= */}
       {/* ================= Delvier Start here ================= */}
    <div className='px-2 h-[80%] flex items-center border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden mdl:inline-flex'>
    <LocationOnIcon />
    <p className="text-sm text-lightText font-light flex flex-col">
      Delvier to {" "}
      <span className="text-sm font-semibold -mt-1 text-whiteText">
        Delhi
        </span>
        </p>
    </div>
       {/* ================= Delvier End here ================= */}
       {/* ================= Search Start here ================= */}
      <div className='h-10 rounded-md hidden lgl:flex flex-grow realative'>
          <span 
          onClick={()=>setShowlAll(!showAll)} className="w-14 h-full 
          bg-gray-50 hover:bg-gray-300 border-0 cursor-pointer
          duration-300 text-sm text-amazon_light 
          font-titleFont flex items-center
          justify-center rounded-tl-md rounded-bl-md">
            All<span>
              <ArrowDropDownIcon />
              </span>
          </span>
          {
            showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-20 left-60 overflow-y-scroll
                overflow-x-hidden bg-white border-[1px] border-amazon_light text-black p-2
                flex-col gap-1 z-50">

                    {
                      allItems.map((item)=>(
                        <li className="text-sm tracking-wide font-titleFont border-b-[1px]
                        border-b-transparent hover:border-b-amazon_light cursor-pointer
                        duration-200" key={item._id}>{item.title}</li>
                      ))
                    }

                </ul>
              </div>
            )
          }
          <input 
          className="h-full text-base text-amazon_light flex-grow outline-none border-none px-2" 
          type="text" placeholder="Search Amazon.in"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 
          text-amazon_light cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>

      </div>
       {/* ================= Search End here ================= */}
       {/* ================= Signin Start here ================= */}
       <div className="hidden lgl:flex flex-col items-start justify-center px-2 h-[80%] border border-transparent 
       hover:border-white cursor-pointer duration-100">
        
          <img className='w-6' src={indiaFlag} alt='indiaFlag' /><p>
          ENG<ArrowDropDownIcon />
          </p>
       </div>
        
        <div className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100">
       <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">Hello, sign in</p>
       <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex ">
        Accounts & Lists {" "}
        <span><ArrowDropDownIcon /> 
        </span>
        </p>
     </div>
       
       {/* ================= Signin End here ================= */}
       {/* ================= Orders Start here ================= */}
      <div className="hidden lgl:flex flex-col items-start justify-center px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100">
        <p className="text-sx text-lightText font-light">Returns</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
      </div>
       {/* ================= Orders End here ================= */}
       {/* ================= Cart Start here ================= */}
            <div className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 relative">
              <ShoppingCartIcon />
              <p className="text-xs font-semibold mt-2 text-whiteText">
                Cart<span className="absolute text-xs top-0 left-6 font-semibold p-1 h-5 
                bg-[#f3a847] text-amazon_light rounded-full justify-center items-center">
                  0
                  </span>
                  </p>
            </div>
       {/* ================= Cast End here ================= */}
   </div>
          <HeaderBottom />
    </div>
  )
}

export default Header

