import React from 'react'

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
            <p className="text-sm">See Personalised recommedations</p>
            <button className='w-full font-titleFont font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Sign In</button>
            <p className="text-xs mt-1">New Customer? {" "}
            <span className="text-blue-600 ml-1 cursor-pointer">Start here.</span></p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
