
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import SideNavContent from './SideNavContent';
import { ArrowDropDown } from '@mui/icons-material';


const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar, setSidebar] = useState(false)
    useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
        if(e.target.contains(ref.current)){
          setSidebar(false)
        }
      })
    },[ref,sidebar])
  return (
    <div className='w-full px-4 h-[38px] bg-slate-700 text-white flex items-center'>
      {/* ============ ListItems Start here  ============ */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li onClick={()=>setSidebar(true)} className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100"><MenuIcon />All</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Amazon miniTV</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Sell</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Best Sellers</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Today's Deals</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Mobiles</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">New Releases</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Customer Service</li>
        <li className="px-2 h-[80%] border border-transparent 
        hover:border-white cursor-pointer duration-100 hidden md:inline-flex">Prime<span><ArrowDropDown /></span></li>
      </ul>
      {/* ============ ListItems End here  ============ */}
      {/* ============  SideNav Start here ============ */}

      {/* ============ SideNav End here ============ */}
      { 
        sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_light
        bg-opacity-50">
            <div className="w-full h-full relative">
             <div ref={ref} className="w-[350px] h-full bg-white border border-black ">
          <div className="w-full bg-amazon_light text-white py-2 px-6 flex itmes-center gap-4 ">
            <AccountCircleIcon />
            <h3 className="font-titleFont font-bold text-lg tracking-wide ">Hello, Sign In</h3>
          </div>
          <div className="w-[349px] h-full bg-white border border-black overflow-y-scroll overflow-x-hidden duration-300">
          <SideNavContent 
            title="Trending"
            one="Best Sellers"
            two="New Releases"
            three="Movers and Shaker"
          />
          <SideNavContent 
            title="Digital Content & Devices"
            one="Amazon Music"
            two="Kindle E-readers & Books"
            three="Amazon Appstore"
          />
          <SideNavContent 
            title="Shop by Department"
            one="Electronics"
            two="Computers"
            three="Smart Home"
          />
          <SideNavContent 
            title="Programs & feature"
            one="Gift Cards"
            two="Amazon live"
            three="International"
          />
          <SideNavContent 
            title="Help & Setting"
            one="Your Account"
            two="Customer Service"
            three="Contact Us"
          />
          </div>
            </div>
            <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-white flex items-center justify-center  duration-300"><CloseIcon /></span>
          </div>
        </div>
      )
    
  
      }
      {/* ============ sideNav End here  ============ */}
    </div>
  )
}

export default HeaderBottom
