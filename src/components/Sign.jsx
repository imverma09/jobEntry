import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
function Sign() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    job: "find",
  });
  function changeHandel(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response from backend:", response.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center h-screen ">
        <img
          className="absolute inset-0 object-cover w-full h-full z-[-1]"
          src="https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background-image"
        />
        <div className=" p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center text-green-500">
            Create New Account
          </h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <label
                className="block text-muted-foreground mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-border rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={userData.name}
                onChange={changeHandel}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-muted-foreground mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-border rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={userData.email}
                onChange={changeHandel}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-muted-foreground mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border border-border rounded"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={userData.password}
                onChange={changeHandel}
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex gap-4 px-2">
                <label className=" text-muted-foreground mb-1" htmlFor="job">
                  Post Job
                </label>
                <input
                  className="w-4"
                  name="job"
                  type="radio"
                  id="post"
                  required
                  value={"post"}
                  checked={userData.job === "post"}
                  onChange={changeHandel}
                />
              </div>
              <div className="flex gap-4 px-2">
                <label className=" text-muted-foreground mb-1" htmlFor="job">
                  Find Job
                </label>
                <input
                  className="w-4"
                  name="job"
                  type="radio"
                  value="find"
                  checked={userData.job === "find"}
                  onChange={changeHandel}
                  id="find"
                  required
                />
              </div>
            </div>
            <button
              className="bg-green-600 text-white text-primary-foreground hover:bg-green-500 w-full p-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-muted-foreground">
            Already Registered?{" "}
            <Link to={"/login"} className="text-accent">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sign;
