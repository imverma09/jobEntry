import React, {useState} from 'react'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
      {
          img: "carousel-1.jpg",
          alt: "A placeholder image for Slide 1 with dimensions 600x400",
          hading : 'FIND THE BEST STARTUP JOB THAT FITS YOU',
          paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos! Exercitationem, nemo reprehenderit? Nisi esse, obcaecati doloremque incidunt facilis,'
      },
      {
          img: "carousel-2.jpg",
          alt: "A placeholder image for Slide 1 with dimensions 600x400",
          hading : 'FIND THE BEST STARTUP JOB THAT FITS YOU',
          paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos! Exercitationem, nemo reprehenderit? Nisi esse, obcaecati doloremque incidunt facilis,'
      },
      {
          img: "carousel-1.jpg",
          alt: "A placeholder image for Slide 1 with dimensions 600x400",
          hading : 'FIND THE BEST STARTUP JOB THAT FITS YOU',
          paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos! Exercitationem, nemo reprehenderit? Nisi esse, obcaecati doloremque incidunt facilis,'
      },
      
  ];

  const prevSlide = () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full ">
              <img src={slide.img} alt={slide.alt} className="w-full opacity-65" />
              <div className='absolute flex flex-col top-1/4 left-20 p-4 z-50 w-1/2 text-left'>
              <h1 className='text-[30px]'>{slide.hading}</h1>
              <p className='text-lg'>{slide.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
