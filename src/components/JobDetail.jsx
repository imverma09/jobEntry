import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function JobDetail() {
    return (
        <>
        <Navbar/>
            <div className="flex bg-gray-100 p-5 h-fit flex-wrap ">
                <div className="w-full bg-white rounded-lg shadow-md md:flex-row h-fit">
                    <div className="flex flex-col p-4 md:flex-row ">
                        <div className="md:w-3/4 ">
                            <div className="flex items-center mb-4 flex-wrap">
                                <img src="/com-logo-1.jpg" alt="Company Logo" className="w-16 h-16 mr-4" />
                                <div>
                                    <h1 className="text-2xl font-bold">Marketing Manager</h1>
                                    <div className="flex items-center text-gray-600 flex-wrap">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        <span>New York, USA</span>
                                        <i className="fas fa-clock ml-4 mr-2"></i>
                                        <span>Full Time</span>
                                        <i className="fas fa-dollar-sign ml-4 mr-2"></i>
                                        <span>$123 - $456</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Job description</h2>
                                <p className="text-gray-700 mb-4">
                                    Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. 
                                </p>
                                <h2 className="text-xl font-bold mb-2">Responsibility</h2>
                                <p className="text-gray-700 mb-4">
                                    Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/4 bg-green-50 p-4 rounded-lg shadow-md mt-4 md:mt-0 md:ml-4">
                            <h2 className="text-xl font-bold mb-4">Job Summery</h2>
                            <ul className="text-gray-700">
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Published On: 01 Jan, 2045</li>
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Vacancy: 123 Position</li>
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Job Nature: Full Time</li>
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Salary: $123 - $456</li>
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Location: New York, USA</li>
                                <li className="mb-2"><i className="fas fa-chevron-right mr-2 text-green-500"></i>Date Line: 01 Jan, 2045</li>
                            </ul>
                            <div className='mt-[10%]'>
                                <a href="#" className=" md:flex bg-green-600 text-white px-4 py-2 rounded items-center">
                                    Apply Now <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form className="bg-white p-8 rounded shadow-md w-[80%]">
                    <h1 className="text-2xl font-bold mb-6">Apply For The Job</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
                        <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="url" placeholder="Portfolio Website" className="border p-2 rounded w-full" />
                        <div className="flex items-center border p-2 rounded w-full">
                            <input type="file" className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 p-2 rounded mr-2">Choose file</label>
                            <span>No file chosen</span>
                        </div>
                    </div>
                    <textarea placeholder="Coverletter" className="border p-2 rounded w-full h-32 mb-4"></textarea>
                    <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Apply Now</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default JobDetail
