import React from 'react'

function banner() {
    return (
        <>
            <div className=" bg-white max-w-screen-2xl text-black container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold '>Hello, welcome here to learn something {" "} <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl'>Discover a world of literature at BookStore, your ultimate destination for books of all genres. Whether you're looking for the latest bestsellers, classic novels, or educational materials, we have something for every reader. Dive into our extensive collection and find your next favorite book today. Enjoy exclusive discounts, free shipping on orders over $50, and a seamless shopping experience. Happy reading!
                        </p>
                        {/* <label className="input input-bordered flex items-center gap-2 bg-white border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label> */}
                    </div>
                    {/* <button className="btn mt-6  btn-secondary">Secondary</button> */}
                </div>
                <div className='order-1 w-full md:w-1/2'>
                <img src={`${process.env.PUBLIC_URL}/banner.jpg`} className='w-92 h-92' alt="Banner" />
                </div>
            </div>
        </>
    )
}

export default banner
