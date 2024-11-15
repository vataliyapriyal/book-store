import React, { useEffect, useState } from 'react'
import Login from "./login"
import Logout from './logout';
import { useAuth } from '../contex/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





function Navbar() {

    const [authUser, setAuthUser] = useAuth();

    const [Sticky, setSticky] = useState(false);
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])
    const navitems = (
        <>
            <li><a className=" hover:bg-slate-800 hover:text-white duration-300" href='/'>Home</a></li>
            <li><a className=" hover:bg-slate-800 hover:text-white duration-300" href='/course'>Course</a></li>
            <li><a className=" hover:bg-slate-800 hover:text-white duration-300" href='/contect'>Contect</a></li>
            <li><a className=" hover:bg-slate-800 hover:text-white duration-300" href='/about'>About</a></li>
        </>
    )


    return (
        <>
            <div className={` bg-white max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${Sticky ? "sticky-navbar shadow-md bg-gray-300 duration-300 transition-all ease-in-out" : ""}`} >
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                {navitems}
                            </ul>
                        </div>
                        <a className="text-2xl font-bold cursor-pointer" href='/'>BookStore</a>

                        {/* cart icon */}
                        <Link to="/cart" className="flex items-center ml-4 sm:ml-8 md:ml-12 lg:ml-20">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-xl sm:text-2xl md:text-3xl cursor-pointer" />
                        </Link>

                    </div>
                    <div className="navbar-end space-x-3">


                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navitems}
                            </ul>
                        </div>
                        <div className='hidden md:block bg-white    '><label className="input input-bordered flex items-center gap-2 bg-white">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label></div>

                        {authUser ? (
                            <Logout />
                        ) : (
                            <div className="">
                                <a className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white duration-300 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                                <Login />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
