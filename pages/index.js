import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/componet/HeroSection";
import Layout from "@/componet/Layout";
import About from "@/componet/About";
import PeopleSay from "@/componet/PeopleSay";
import { TiSocialFacebook,TiSocialInstagram,TiSocialLinkedin,TiSocialGooglePlus } from "react-icons/ti";
// import { TiSocialInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
         
      
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Divyesh Variya</h1>
            <h6 className="header-mono">ReactJS Developer</h6>
      
          </div>
        </div>
      </header>
      <About />

      <PeopleSay />
    </>
  );
}
