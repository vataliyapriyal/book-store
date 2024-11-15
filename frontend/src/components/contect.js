import React from 'react';
import Navbar from './navbar'; // Ensure the correct import path
import { Link } from 'react-router-dom';

function Contect() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <form className="bg-white p-10 rounded-md shadow-md border border-black text-black">
                    <h3 className="font-bold text-lg mb-4 text-center">Contact Us</h3>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Name</label>
                        <input type='text' placeholder='Enter your Name' className='w-full px-3 py-2 border rounded-md outline-none bg-white text-black'/>
                    </div>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Email</label>
                        <input type='email' placeholder='Enter your email' className='w-full px-3 py-2 border rounded-md outline-none bg-white text-black'/>
                    </div>
                    {/* Message */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Message</label>
                        <textarea placeholder='Enter your message' className='w-full px-3 py-2 border rounded-md outline-none bg-white text-black'  />
                    </div>
                    {/* Submit button */}
                    <div className='flex justify-center mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contect;
