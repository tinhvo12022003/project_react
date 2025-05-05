import React from "react";
import { Carousel } from "antd";
import banner1 from "../assets/banners/1.jpg"; // import image
import banner2 from "../assets/banners/2.jpg"; // import image
import banner3 from "../assets/banners/3.jpg"; // import image

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "black"
};

export default function Home() {
  return (

    
    <>

    {/*carousel*/}
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


      
    </>
  );
}
