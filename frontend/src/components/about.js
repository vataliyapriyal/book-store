import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar';


function about() {
  return (
    <div>
      <Navbar/>
      <div className="hero min-h-screen bg-white text-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={`${process.env.PUBLIC_URL}/banner.jpg`} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">BOOK STORE</h1>
            <p className="py-6">Provide good and effective books </p>
            <p className="py-6">Here you can show all type of books you can buy it with low price</p>
            <p className="py-6">All rights of this bookstore is reserved buy @bookstore </p>

            <Link to="/" className="btn btn-primary">Buy now</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default about

