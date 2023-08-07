import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-amazon_light py-8'>
      <div className="w-full border-b-[1px] border-gray-500 py-10">
      <div className='max-w-5xl mx-auto px-4'>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 md:grid-cols-5 lgl:grid-cols-5 gap-4 place-content-center text-gray-400'>
          {
            footerBottomItem.map((item) => (
              <div key={item._id}>
                <h3 className="font-titleFont text-white text-white text-base font-semibold mb-3 font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150">{item.titles}</h3>
                <p  className="text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150">{item.des}</p>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
 
