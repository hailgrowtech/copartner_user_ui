import React, { useEffect, useState } from "react";
import { logo, menu, close, hamburgerBg } from "../../assets";
import { navLinks } from "../../constants";
import styles from "../../style";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 z-50 w-full ${
          isScrolled ? styles.transparentNavbar : styles.scrolledNavbar
        }`}
      >
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex md:py-5 py-4 justify-between items-center">
            <Link to="/">
              <img src={logo} alt="LOGO" className="w-[134px] h-[38px]" />
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
                  <Link to={`${nav.id === "home" ? "/" : nav.id}`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ marginLeft: "1rem" }}>
              <button className="text-dimWhite w-[117px] py-[5px] ms-6 rounded-[36px] border border-solid border-white border-opacity-60 flex justify-center">
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
                } justify-center items-center fixed top-0 left-0 z-50 w-full h-full p-3 bg-gradient-to-tr`}
                style={{
                  backgroundImage: `url(${hamburgerBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundSize: "35rem"
                }}
              >
                <img
                  src={close}
                  alt="Close"
                  className="w-[28px] h-[28px] object-contain cursor-pointer absolute top-4 right-4"
                  onClick={() => setToggle(false)}
                />

                <ul className="list-none flex flex-col justify-end items-center -mt-28 gap-4">
                  <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-8">
                    <img width={"200rem"} src={logo} alt="" />
                  </li>
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                      className={`font-poppins font-normal cursor-pointer text-[16px]
                           ${
                             active === nav.title
                               ? "text-white"
                               : "text-[#393F48]"
                           }
                           ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <Link to={`${nav.id === "home" ? "/" : nav.id}`}>
                        {nav.title}
                      </Link>
                    </li>
                  ))}

                  <li className="mt-4">
                    <button className="text-dimWhite text-[11px] py-1 px-4 rounded-[36px] border border-solid border-white border-opacity-60 flex  items-center">
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
