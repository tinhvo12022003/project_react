import React from "react";
import { Outlet, Link } from "react-router-dom"

{/*import logo*/ }
import logo from "../assets/logo.jpg"

{/*import icon*/ }
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

{/*footer component*/ }
export default function Footer() {
    return (
        <>
            {/*4 column responsive*/}
            <footer className="footer-container block space-y-5 md:grid md:grid-cols-4 py-5 px-5 bg-red-800 text-white">


                {/*first column - about*/}
                <div className="footer-about font-bold text-4xl text-center flex items-center ">
                    <a href="/">
                        <img src={logo} alt="logo brand" className="rounded-full w-20 pb-3" />
                    </a>
                    <h1>Dominal Restaurant</h1>
                </div>



                {/*second column - contact*/}
                <div className="footer-contact flex flex-col items-start text-center space-y-2">
                    {/* address */}
                    <p className="flex items-center space-x-2">
                        <FaMapMarkerAlt />
                        <span>123 Local Town Country</span>
                    </p>

                    {/* phone */}
                    <p className="flex items-center space-x-2">
                        <AiFillPhone />
                        <span>0123456789</span>
                    </p>

                    {/* email */}
                    <p className="flex items-center space-x-2">
                        <MdEmail />
                        <span>abc@gmail.com</span>
                    </p>
                </div>


                {/*third column - links*/}
                <div className="footer-links ">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/order">Order</a></li>
                    </ul>
                </div>


                {/*last column - social netword*/}
                <div className="container-social">
                    <ul className="flex flex-col space-y-2">
                        <li className="flex items-center gap-3">
                            <FaFacebook />
                            <span>www.facebook.dominal.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaInstagram />
                            <span>www.instagram.dominal.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaAmazon />
                            <span>www.amazon.dominal.com</span>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
} 