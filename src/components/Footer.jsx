import React from 'react'

function Footer() {
  return (
    <footer className="py-10" >
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h5 className="text-white font-bold mb-4">Company</h5>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">About Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Contact Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Our Services</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Terms & Condition</a></li>
                </ul>
            </div>
            <div>
                <h5 className="text-white font-bold mb-4">Quick Links</h5>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">About Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Contact Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Our Services</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline text-gray-300">Terms & Condition</a></li>
                </ul>
            </div>
            <div>
                <h5 className="text-white font-bold mb-4">Contact</h5>
                <ul>
                    <li className="mb-2 text-gray-300"><i className="fas fa-map-marker-alt mr-2"></i>123 Street, New York, USA</li>
                    <li className="mb-2 text-gray-300"><i className="fas fa-phone-alt mr-2"></i>+012 345 67890</li>
                    <li className="mb-2 text-gray-300"><i className="fas fa-envelope mr-2"></i>info@example.com</li>
                </ul>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-youtube"></i></a>
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div>
                <h5 className="text-white font-bold mb-4">Newsletter</h5>
                <p className="mb-4 text-gray-300">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="flex">
                    <input type="email" className="w-full px-4 py-2 text-gray-800" placeholder="Your email" />
                    <button className="bg-green-500 text-white px-4 py-2">SignUp</button>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p>© <a href="#" className="text-white hover:underline">JOB ENTRY</a>, All Right Reserved. Designed By <a href="#" className="text-white hover:underline">JSX Coder</a></p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">FAQs</a>
        </div>
    </div>
</footer>
  )
}

export default Footer
