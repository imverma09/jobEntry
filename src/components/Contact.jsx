import React from 'react'
import Navbar from './Navbar'
import './app.css'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='main'>
        <h1>
          Contact For Any Quary
        </h1>
      </div>
      <div className='main-contact'>
        <div className='contact'>
          <div className='icon'><i class="fa-solid fa-location-crosshairs"></i>
          </div>
          <div>
            <h2>123 Street, New York , USA</h2>
          </div>
        </div>
        <div className='contact'>
          <div className='icon'><i class="fa-solid fa-envelope"></i>
          </div>
          <div>
            <h2>info@example.com</h2>
          </div>
        </div>
        <div className='contact'>
          <div className='icon'>
            <i class="fa-solid fa-phone"></i>
          </div>
          <div>
            <h2> +012 345 6789</h2>
          </div>
        </div>
      </div>

      <div className='formdata'>
        <div className='map'><img src="map.crdownload" alt="" /></div>
        <div className='formtext'>
          <h1>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='download'> Download Now.</span></h1>
          <div className='forminput' >
            <input type="text" placeholder='Your Name' />
            <input className="input2" type="text" placeholder='Your Email' />

          </div>
          <div>

            <input type="text" className='subject' placeholder='subject' />

          </div>
          <div>
            <input type="text" className='message' placeholder='Message' />

          </div>
          <div>
            <button className='btn22'>send message</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
