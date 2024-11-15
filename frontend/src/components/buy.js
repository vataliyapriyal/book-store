import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contex/CartContext';

function Buy() {
    const location = useLocation();
    const { item } = location.state;
    const { addToCart } = useCart();

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <Link to="/" className="btn btn-sm bg-white text-black btn-circle absolute right-10 top-10">✕</Link>

            <div id="buy" className="card lg:card-side shadow-xl bg-white text-black mx-auto">
                <figure className="w-auto lg:w-1/2"> 
                    <img src={item.image} alt="Product" className="mx-auto object-contain" style={{ maxHeight: '20rem' }} />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-3xl">Name: {item.name}</h2>
                    <p className="text-lg"><strong>Price: </strong> {item.price}</p>
                    <p className="text-lg"><strong>Description :</strong> {item.description}</p>
                    <div className="card-actions justify-end">
                        <Link to="/cart" className="btn btn-primary text-lg" onClick={() => addToCart(item)}>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
