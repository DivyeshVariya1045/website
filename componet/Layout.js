import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import logo from "@/assets/images/logo.png";

import Footer from "./Footer";
import { NavbarData } from "@/pages/api/NavbarData";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("User");
    setCollapse(false);
  };

  return (
    <>
      <div className="">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <Image src={logo} height={50} alt="logo"/>
              </a>

              <button
                onClick={() => {
                  setCollapse((prev) => !prev);
                }}
                className={
                  collapse ? "navbar-toggler" : "navbar-toggler collapsed"
                }
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={collapse}
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className={
                  collapse
                    ? "navbar-collapse collapse show"
                    : "collapse navbar-collapse "
                }
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  {NavbarData?.map((item) => {
                    return (
                      <li key={item.id} className="nav-item active">
                        <Link
                          className="nav-link"
                          href={item.path}
                          onClick={() => {
                            setCollapse(false);
                          }}
                        >
                          {item.name} <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                    );
                  })}

                  {login ? (
                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        href="/login"
                        onClick={handleLogout}
                      >
                        lOGOUT <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        href="/login"
                        onClick={() => {
                          setCollapse(false);
                        }}
                      >
                        LOGIN <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  )}
                </ul>
                <div className="quote_btn-container">
                  <a href="">
                    <BiSolidUser />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
