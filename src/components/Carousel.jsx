import React, { useEffect, useState } from 'react'
import './app.css'

function Carousel() {


  const img = [
    {
      src: 'carousel-1.jpg',
      text: 'FIND THE BEST STARTUP JOB THAT FITS YOU',
      smtext: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos! Exercitationem, nemo reprehenderit? Nisi esse, obcaecati doloremque incidunt facilis,',
      btn1: "Search A job",
      btn2: "Find A talent"
    },
    {
      src: 'carousel-2.jpg',
      text: 'START YOUR CAREER WITH US',
      smtext: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos! Exercitationem, nemo reprehenderit? Nisi esse, obcaecati doloremque incidunt facilis,'

    }
  ];


  const [currimg, setCurrimg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextimg();
    }, 80000)
    return () => clearInterval(interval);


  }, [currimg]);

  const nextimg = () => {
    if (currimg < img.length - 1) {
      setCurrimg(currimg + 1);
    } else {
      setCurrimg(0);
    }
  }

  const backimg = () => {
    if (currimg > 0) {
      setCurrimg(currimg - 1);

    } else {
      setCurrimg(img.length - 1)
    }
  }








  return (
    <div>


      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src={img[currimg].src}
            alt={`img ${currimg + 1}`}
            className="carousel-image"
          />
          <div className="carousel-text">{img[currimg].text}</div>
          <div className='carousel-sm'>{img[currimg].smtext}</div>
          <div><button className=' btn1'>{img[currimg].btn1}</button></div>
          <div><button className=' btn2'>{img[currimg].btn2}</button></div>
        </div>
        <button className=" btn prev" onClick={backimg}>
          &lt;
        </button>
        <button className="btn next" onClick={nextimg}>
          &gt;
        </button>
      </div>


    </div>
  )
}

export default Carousel



