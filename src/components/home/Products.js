import React from "react"
import { useLoaderData } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Products = () => {
  const data = useLoaderData()
  const ProductsData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {
        ProductsData.map((item)=>(
          <div key={item.id} className='bg-white h-auto border-[2px] border-gray-300 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 flex flex-col gap-4 relative'
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              {item.category}
            </span>
            <div className="w-full h-auto flex items-center justify-center relative group">
            <img 
            className="w-52 h-64 object-contain" 
            src={item.image} 
            alt="ProductImg" 
            />
            <ul className="w-full bg-gray-100 absolute bottom-[-159px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700">
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Compare{" "}
                <span><ApiIcon /></span>
                </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Add to Cart{" "}<span><AddShoppingCartIcon /></span>
                </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                View Details{" "}<span><ArrowCircleRightIcon /></span>
                </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Add to Wish List{" "}<span><FavoriteIcon /></span>
                </li>
            </ul>
            </div>
            
            <div className="px-4 z-10 bg-white"> 
             <div className="flex items-center justify-between">
              <h3 className="font-titleFont tracking-wide text-lg text-amazon_light font-medium">
                {item.title.substring(0,20)}
                </h3>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
                </p>
             </div>
             <div>
              <p className="text-sm">{item.description.substring(0,100)}...</p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
             </div>
             <button className='w-full font-titleFont font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-500 duration-200 py-1.5 rounded-md mt-3'>
              Add to Cart
              </button>
            </div>
            </div>
          
        ))
      }
    </div>
  )
}

export default Products


 