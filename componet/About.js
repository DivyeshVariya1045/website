import Image from "next/image";
import React from "react";
import AboutImage from "@/assets/images/about-image.png";

const About = () => {
  return (
    <>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
          
            <div className="heading_container">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <Image
                className="img-fluid rounded w-80"
                src={AboutImage}
                alt="ABOUT"
              />
            </div>
            <div className="col-lg-7">
              <p>
                Hello, I'm <b>Divyesh Variya</b> , and I recently completed my
                Bachelor's degree in Computer Science. With a strong educational
                foundation, I am passionate about exploring the vast world of
                technology and its limitless possibilities. Throughout my
                studies, I have gained valuable experience in programming, web
                development, and software development. I possess a keen eye for
                detail and enjoy tackling complex challenges. In my free time, I
                love diving into the latest advancements in web development and
                web designing. I am excited to embark on a journey of continuous
                learning and innovation, eager to contribute my skills and
                knowledge to create impactful solutions.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name: <span className="text-secondary">Divyesh Variya</span>
                  </h6>
                </div>

                <div className="col-sm-6">
                  <h6>
                    Phone: <span className="text-secondary">+91 7359523019</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
