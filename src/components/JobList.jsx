import React, { useState } from 'react'

function JobList() {

    const [filter, setFilter] = useState('Featured');
    const [jobs, setJobs] = useState([
      
        {
            id : 1,
            like : false,
            title: 'Software Engineer',
            location: 'New York, USA',
            type: 'Full Time',
            salary: '$123 - $456',
            deadline: '01 Jan, 2045',
            logo: 'com-logo-1.jpg',
            company: 'TechCom'
        },
        {
            id : 2,
            like : false,
            title: 'Marketing Manager',
            location: 'New York, USA',
            type: 'Full Time',
            salary: '$123 - $456',
            deadline: '01 Jan, 2045',
            logo: 'com-logo-5.jpg',
            company: 'International Hearts'
        },
        {
            id : 3,
            like : false,
            title: 'Marketing Manager',
            location: 'New York, USA',
            type: 'Full Time',
            salary: '$123 - $456',
            deadline: '01 Jan, 2045',
            logo: 'com-logo-4.jpg',
            company: 'International Hearts'
        },
        {
            id : 4,
            like : false,
            title: 'Software Engineer',
            location: 'New York, USA',
            type: 'Full Time',
            salary: '$123 - $456',
            deadline: '01 Jan, 2045',
            logo: 'com-logo-1.jpg',
            company: 'TechCom'
        },
        {
            id : 5,
            like : false,
            title: 'Part Time Developer',
            location: 'San Francisco, USA',
            type: 'Part Time',
            salary: '$100 - $200',
            deadline: '15 Feb, 2045',
            logo: 'com-logo-2.jpg',
            company: 'PartTime Inc'
        },
        {
            id : 6,
            title: 'Part Time Developer',
            location: 'San Francisco, USA',
            type: 'Part Time',
            salary: '$100 - $200',
            deadline: '15 Feb, 2045',
            logo: 'com-logo-3.jpg',
            company: 'PartTime Inc',
            like : false,
        }
    ]);
   const likeHandel = (e)=>{
    const id =  e.target.id
    setJobs(jobs.map(job => job.id == id ? {...job ,like : !job.like  } : job))
    console.log(jobs)
   }
    const filteredJobs = filter === 'Featured' ? jobs : jobs.filter(job => job.type === filter);
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Job Listing</h1>
            <div className="flex justify-center mb-6">
                <button
                    className={`px-4 py-2 font-semibold ${filter === 'Featured' ? 'text-gray-700 border-b-2 border-green-500' : 'text-gray-700'}`}
                    onClick={() => setFilter('Featured')}
                >
                    Featured
                </button>
                <button
                    className={`px-4 py-2 font-semibold ${filter === 'Full Time' ? 'text-gray-700 border-b-2 border-green-500' : 'text-gray-700'}`}
                    onClick={() => setFilter('Full Time')}
                >
                    Full Time
                </button>
                <button
                    className={`px-4 py-2 font-semibold ${filter === 'Part Time' ? 'text-gray-700 border-b-2 border-green-500' : 'text-gray-700'}`}
                    onClick={() => setFilter('Part Time')}
                >
                    Part Time
                </button>
            </div>
            {filteredJobs.map((job, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg mb-4 p-4 flex flex-wrap items-center">
                    <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 mr-4" />
                    <div className="flex-grow">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <div className="text-gray-600">
                            <span className="mr-4"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                            <span className="mr-4"><i className="fas fa-clock"></i> {job.type}</span>
                            <span className="mr-4"><i className="fas fa-dollar-sign"></i> {job.salary}</span>
                        </div>
                    </div>
                    <div className="text-right ">
                    <i id={job.id} onClick={likeHandel} className={`fas fa-heart mr-2 cursor-pointer ${job.like &&'text-red-600'}`}></i>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                             Apply Now
                        </button>
                        <div className="text-gray-500 mt-2"><i className="fas fa-calendar-alt"></i> Date Line: {job.deadline}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobList
