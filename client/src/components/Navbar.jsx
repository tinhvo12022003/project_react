import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/Navbar.css"; // Import your CSS file here

// import image logo
import logo from "../assets/logo.jpg"

export default function Navbar() { {/*sticked navbar*/}
    return (
        <>
            {/*top margin-20px top-margin-20px*/}
            {/*display auto block < sm; md:grid*/}
            <nav className="navbar nav-container md:grid grid-cols-3 content-center gap-4 py-5 px-5 block bg-red-700 text-white font-bold sticky top-0 w-full z-50 shadow-xl">  {/*nav container - 3 columns*/}


                {/* Left Menu - First columns*/}
                <div className="flex justify-center items-center w-full">
                    <Link to="/">
                        <img src={logo} alt="logo brand" className="rounded-full w-20 pb-3" />
                    </Link>
                </div>


                {/*center search area*/}
                <div className="center-search text-center flex justify-center items-center md:flex gap-3 md:w-full p-3 rounded-lg shadow-lg">
                    <form
                        action=""
                        method="post"
                        className="flex items-center gap-2 w-full max-w-lg min-w-[300px] mx-auto"
                    >

                        {/*text white*/}
                        <input
                            type="text"
                            className="text-white p-3 w-full border rounded-md border-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder:text-white"
                            placeholder="What are you craving?"
                        />
                        <button
                            type="button"
                            className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Search
                        </button>
                    </form>
                </div>




                {/* right menu list - Last column*/}
                {/*block < sm; md:flex*/}
                <ul className="list-right-menu text-center block md:flex md:justify-items-center md:items-center md:justify-evenly">   {/*flex item*/}

                    {/*padding between items link*/}

                    <li className="py-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="py-5">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="py-5">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="py-5">
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="py-5">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            {/* This is where the child routes will be rendered */}
            {/* For example, if you have a route like /about/team, the Team component will be rendered here */}
            {/* <Outlet /> */}
        </>
    );
}
