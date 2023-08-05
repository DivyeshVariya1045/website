import React from "react";
import Slider from "react-slick";
import img from "@/assets/images/image_3.jpg"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1000
    
  
  };
  return (
    <>
      <Slider {...settings}>
        <div className="hero_slider">
          <Image src={img} className="img"  />
        </div>

        <div className="hero_slider">
          <Image src={img}   className="img"/>
        </div>
        <div className="hero_slider">
          <Image src={img}   className="img"/>
        </div>
        <div className="hero_slider">
          <Image src={img}   className="img"/>
        </div>
        {/* <d
        
        iv>
          <img src="https://source.unsplash.com/random/900x700/?it,computer,developer"   />
        </d>
        <div>
          <img src="https://source.unsplash.com/random/900x700/?it,computer,developer"   />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/900x700/?it,computer,developer"   />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/900x700/?it,computer,developer"   />
        </div>   */}
      </Slider>
    </>
  );
};

export default HeroSection;
