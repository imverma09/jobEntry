import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <>
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-4xl font-bold text-green-600">JobEntry</div>
                <div className='flex gap-2'>
                    <nav className="hidden md:flex space-x-4 items-center mx-2">
                        <Link to={'/'} className="text-gray-800 hover:text-green-600">HOME</Link>
                        <Link to={'/about'} className="text-gray-800 hover:text-green-600">ABOUT</Link>
                        {/* <a href="#" className="text-green-600">ABOUT</a> */}
                        <div className="relative group">
                            <a href="#" className="text-gray-800 hover:text-green-600 flex items-center">
                                JOBS <i className="fas fa-chevron-down ml-1"></i>
                            </a>
                            <div className="absolute z-50 left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
                                <Link to={'/jobDetail'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Job Detail</Link>
                                <Link to={'/jobList'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">job List</Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="#" className="text-gray-800 hover:text-green-600 flex items-center">
                                PAGES <i className="fas fa-chevron-down ml-1"></i>
                            </a>
                            <div className="absolute z-50 left-0 mt-1    w-48 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Page 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Page 2</a>
                            </div>
                        </div>
                        <a href="#" className="text-gray-800 hover:text-green-600">CONTACT</a>
                    </nav>
                    <a href="#" className="hidden md:flex bg-green-600 text-white px-4 py-2 rounded items-center">
                        Post A Job <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 focus:outline-none">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            </header>
            {isOpen && (
                <div className="md:hidden border-b border-gray-200 dropDown">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">HOME</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</a>
                    <div className="relative group">
                        <a href="#" className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                            JOBS <i className="fas fa-chevron-down ml-1"></i>
                        </a>
                        <div className="pl-4 hidden group-hover:block">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Job 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Job 2</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                            PAGES <i className="fas fa-chevron-down ml-1"></i>
                        </a>
                        <div className="pl-4 hidden group-hover:block">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Page 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Page 2</a>
                        </div>
                    </div>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CONTACT</a>
                </div>
            )}
              </>
    )
}

export default Navbar
