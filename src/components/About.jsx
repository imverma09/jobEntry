import React from 'react'
function About() {
    return (
        <>
            <div className="relative">
                <img src="carousel-1.jpg" alt="Two women discussing something on a tablet" className="w-full h-[50vh] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
                    <div className="border-l-4 border-green-500 pl-4">
                        <h1 className="text-white text-4xl font-bold">Job Detail</h1>
                    </div>
                    <div className="mt-2 text-green-500">
                        <a href="#" className="hover:underline">HOME</a> / <a href="#" className="hover:underline">PAGES</a> / <span>JOB DETAIL</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  ">
                <h1 className='text-3xl mb-10 text-green-600 underline underline-offset-[12px]'>About Us</h1>
                <div className="container mx-auto p-4 w-[85%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                        <div className="grid grid-cols-2">
                            <img src="/about-1.jpg" alt="Group of professionals posing for a photo" className="w-full h-auto" />
                            <img src="/about-2.jpg" alt="Two business professionals discussing something on a phone" className="w-full h-auto" />
                            <img src="/about-3.jpg" alt="Team of professionals high-fiving each other in an office" className="w-full h-auto" />
                            <img src="/about-4.jpg" alt="Business meeting with a group of people around a table" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">We Help To Get The Best Job And Find A Talent</h1>
                            <p className="text-gray-600 mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <ul className="mb-4">
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    <span>Tempor erat elitr rebum at clita</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    <span>Aliqu diam amet diam et eos</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    <span>Clita duo justo magna dolore erat amet</span>
                                </li>
                            </ul>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
