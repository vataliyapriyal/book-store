import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";     //for the slider with the use of a react slick
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards"
import axios from 'axios';


function Freebook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='text-black max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semiblod text-xl pb-2'>Free Offered Course</h1>
          <p> Expand your knowledge with our selection of free courses at BookStore. Whether you're interested in enhancing your skills, exploring new hobbies, or diving into new subjects, our free courses provide valuable learning opportunities for everyone. Enjoy high-quality content, expert instruction, and the flexibility to learn at your own pace—all at no cost. Start your educational journey with us today!

          </p>
        </div>
        
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
       

        <div></div>
      </div>
    </>
  )
}

export default Freebook
