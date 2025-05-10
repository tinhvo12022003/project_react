import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom"; // Import Link for navigation
import banner1 from "../../assets/banners/1.jpg"; // import image
import banner2 from "../../assets/banners/2.jpg"; // import image
import banner3 from "../../assets/banners/3.jpg"; // import image

export default function Home() {
  return (
    <>
      {/* Carousel */}
      <Carousel autoplay>
        <div>
          <img
            src={banner1}
            alt="banner"
            style={{ width: "100%", height: "50%", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src={banner2}
            alt="banner"
            style={{ width: "100%", height: "50%", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src={banner3}
            alt="banner"
            style={{ width: "100%", height: "50%", objectFit: "contain" }}
          />
        </div>
      </Carousel>

      {/* Navigation Categories */}
      <div className="nav-categories-container my-8">
        <ul className="flex space-x-4 justify-center items-center gap-[50px]">
          <li className=""> 
            <Link to="/client/pizzalist" className="text-red-700 font-bold text-4xl px-5">
              Pizza
            </Link>
          </li>
          <li>
            <Link to="/client/burgerlist" className="text-red-700 font-bold text-4xl px-5">
              Burger
            </Link>
          </li>
          <li>
            <Link to="/client/drinklist" className="text-red-700 font-bold text-4xl px-5">
              Drink
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
