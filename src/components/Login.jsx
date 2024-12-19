import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Login = () => {
    return (
        <>
            <Navbar />
            <div className="relative flex items-center justify-center h-screen ">
                <img className="absolute inset-0 object-cover w-full h-full z-[-1]" src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="background-image" />
                <div className=" p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-primary mb-6 text-center text-green-500">Welcome Back</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-muted-foreground mb-1" htmlFor="email">
                                Email
                            </label>
                            <input className="w-full p-2 border border-border rounded" type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-muted-foreground mb-1" htmlFor="password">
                                Password
                            </label>
                            <input className="w-full p-2 border border-border rounded" type="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <button className="bg-green-600 text-white text-primary-foreground hover:bg-green-500 w-full p-2 rounded" type="submit">
                            Login 
                        </button>
                    </form>
                    <p className="mt-4 text-center text-muted-foreground">
                    Don't have an account ?{' '}
                        <Link to={'/sign'}  className="text-accent">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
