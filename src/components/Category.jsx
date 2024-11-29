import React from 'react'

function Category() {
    const categories = [
        { icon: 'fas fa-envelope', title: 'Marketing', vacancies: 123 },
        { icon: 'fas fa-headset', title: 'Customer Service', vacancies: 123 },
        { icon: 'fas fa-user-tie', title: 'Human Resource', vacancies: 123 },
        { icon: 'fas fa-tasks', title: 'Project Management', vacancies: 123 },
        { icon: 'fas fa-chart-line', title: 'Business Development', vacancies: 123 },
        { icon: 'fas fa-handshake', title: 'Sales & Communication', vacancies: 123 },
        { icon: 'fas fa-book-reader', title: 'Teaching & Education', vacancies: 123 },
        { icon: 'fas fa-drafting-compass', title: 'Design & Creative', vacancies: 123 },
    ];
    return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold mb-8">Explore By Category</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer">
                            <i className={`${category.icon} text-green-600 text-4xl mb-4`}></i>
                            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                            <p className="text-green-600">{category.vacancies} Vacancy</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Category
