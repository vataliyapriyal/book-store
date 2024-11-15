import React from 'react'
import Home from './Home/home'
import Courses from "./courses/courses"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./components/signup"
import Contect from "./components/contect"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './contex/AuthProvider'
import Buy from './components/buy'
import Cart from './components/cart'
import AboutPage from './components/about'

function App() {
  const[authUser, setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<AboutPage/>}/>

      </Routes>
        <Toaster />
    </div>
  )
}

export default App
