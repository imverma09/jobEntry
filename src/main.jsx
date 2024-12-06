import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JobDetail from './components/JobDetail.jsx'
import AboutSection from './components/AboutSection.jsx'
import JobListSection from './components/JobListSection.jsx'
import Contact from './components/Contact.jsx'
// import <About
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutSection />
  },
  {
    path: '/jobDetail',
    element: <JobDetail />
  },{
    path : "/jobList",
    element : <JobListSection/>
  } ,{
    path : "/contact",
    element : <Contact/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
