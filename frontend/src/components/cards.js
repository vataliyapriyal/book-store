import React from 'react'
import { useNavigate } from 'react-router-dom';


function Cards({ item }) {
  
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/buy', { state: { item } });
  };
  
  return (
    <div className='mt-4 my-3 p-3' onClick={handleBuy}>
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure className='w-auto'>
          <img src={item.image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body bg-white text-black">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary m-2">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration:200 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
