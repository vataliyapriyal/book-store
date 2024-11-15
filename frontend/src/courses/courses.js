import React from 'react'
import Navbar from '../components/navbar'
import Course from '../components/course'
import Footer from '../components/footer'

function courses() {

    return (
        <>
            <div>
                <Navbar />
                <div className='min-h-screen'>
                    <Course />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default courses

