import React from 'react'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
function AboutSection() {
  return (
    <div>
        <Navbar/>
        <div className="relative">
                <img src="carousel-1.jpg" alt="Two women discussing something on a tablet" className="w-full h-[50vh] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
                    <div className="border-l-4 border-green-500 pl-4">
                        <h1 className="text-white text-4xl font-bold">ABOUT</h1>
                    </div>
                    <div className="mt-2 text-green-500">
                        <a href="#" className="hover:underline">HOME</a> / <a href="#" className="hover:underline">ABOUT</a> 
                    </div>
                </div>
            </div>
            <div className='m-10'>
      <About/>

            </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutSection
