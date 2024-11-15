import React from 'react'
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Freebook from "../components/freebook"

function home() {
    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Freebook />
                <Footer />
            </div>
        </>
    )
}

export default home
