import React from "react";
import backgroundImage from "../../assets/background.jpg"; // Đảm bảo đường dẫn chính xác
import "./../../style/Login.css";
import googleIcon from "../../assets/icon/Google__G__logo.svg.png"
import facebookIcon from "../../assets/icon/Facebook_Logo_(2019).png"

export default function Login() {
    const loginContainerStyle = {
        backgroundColor: "black",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
    };

    return (
        <div className="login-form-container flex justify-center items-center" style={loginContainerStyle}>
            <div style={overlayStyle}></div>

            <div
                className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h1 className="font-roboto-condensed text-4xl font-bold text-center text-white mb-6">
                    Login
                </h1>
                <form action="" method="post" className="space-y-6">
                    {/* Email input field */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    {/* Password input field */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-white font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    {/* Button field */}
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ml-4"
                        >
                            Sign up
                        </button>

                        

                    </div>


                    <div className="google-login-container">
                        <button type="button"
                            className="bg-white py-2 px-4 text-black flex justify-center items-center gap-2 rounded-lg w-full hover:bg-[#b4b4b4] transition duration-300"
                        >
                            <span>
                                <img src={googleIcon} alt="Login with google" className="w-5" />
                            </span>
                            Login with Google
                        </button>
                    </div>

                    <div className="facebook-login-container">
                        <button type="button"
                            className="bg-blue-700 py-2 px-4 text-white flex justify-center items-center gap-2 rounded-lg w-full hover:bg-blue-800 transition duration-300"
                        >
                            <span>
                                <img src={facebookIcon} alt="Login with facebook" className="w-5" />
                            </span>
                            Login with Google
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}