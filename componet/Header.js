import React from "react";
import '@/styles/Home.module.css';
const Header = () => {
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
    </>
  );
};

export default Header;
