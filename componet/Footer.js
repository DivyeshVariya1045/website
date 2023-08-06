import React from "react";
import instaImage from "@/assets/images/insta-img.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
          <div className="d-flex justify-content-center mb-4">
            <Link
              className="btn btn-light btn-social mr-2"
              href="https://wa.me/7359523019"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              className="btn btn-light btn-social mr-2"
              href="https://www.facebook.com/variya.divyesh.37"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="btn btn-light btn-social mr-2"
              href="https://instagram.com/mr_divu_variya143?igshid=MzNlNGNkZWQ4Mg=="
            >
              <GrInstagram />
            </Link>
            <Link
              className="btn btn-light btn-social mr-2"
              href="https://www.linkedin.com/in/divyesh-variya-349061272"
            >
              <BsLinkedin />
            </Link>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-white" href="#">
              Privacy
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Terms
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              FAQs
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Help
            </a>
          </div>
          <p className="m-0">
            &copy;{" "}
            All Rights Reserved. Developed by{" "}
            <Link
              className="text-white font-weight-bold"
              href="https://wa.me/7359523019"
            >
              Divyesh Variya
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
