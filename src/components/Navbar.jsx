import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex pt-6 justify-between items-center">
            <Link to="/">
              <img src={logo} alt="LOGO" className="w-[134px] h-[42px]" />
            </Link>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => setActive(nav.title)}
                  className={`font-poppins font-normal cursor-pointer text-[16px]
                        ${active === nav.title ? "text-white" : "text-dimWhite"}
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <Link to={`${nav.id === "home" ? "/" : nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>

            <div style={{ marginLeft: "1rem" }}>
              <button className="text-dimWhite w-[117px] p-[3px] rounded-[36px] border border-solid border-white border-opacity-60 flex justify-center">
                Refer & Earn
              </button>
            </div>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } justify-center items-center fixed top-0 left-0 z-50 w-full h-full p-3 bg-slate-500`}
              >
                <img
                  src={close}
                  alt="Close"
                  className="w-[28px] h-[28px] object-contain cursor-pointer absolute top-4 right-4"
                  onClick={() => setToggle(false)}
                />

                <ul className="list-none flex flex-col justify-end items-center">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      onClick={() => setActive(nav.title)}
                      className={`font-poppins font-normal cursor-pointer text-[16px]
                           ${
                             active === nav.title
                               ? "text-white"
                               : "text-dimWhite"
                           }
                           ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <Link to={`${nav.id === "home" ? "/" : nav.id}`}>{nav.title}</Link>
                    </li>
                  ))}

                  <li className="mt-4">
                    <button className="text-dimWhite w-[117px] p-[3px] rounded-[36px] border border-solid border-white border-opacity-60 flex justify-center">
                      Refer & Earn
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
