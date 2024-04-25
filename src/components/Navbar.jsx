import React, { useEffect, useState } from "react";
import { logo, menu, hamburgerBg, LogOut, close, userImg } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Home/Footer";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;

    const activeNav = navLinks.find(
      (nav) =>
        `/${nav.id}` === currentPath ||
        (nav.id === "home" && currentPath === "/")
    );

    if (activeNav) {
      setActive(activeNav.title);
    } else {
      setActive(null)
    }
  }, [location]);

  const handleClick = (title) => {
    setActive(title);
  };

  return (
    <>
      <div
        className={`${styles.paddingX} ${
          styles.flexCenter
        } fixed top-0 z-50 w-full ${
          isScrolled ? styles.transparentNavbar : styles.scrolledNavbar
        }`}
      >
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex md:py-5 py-4 justify-between items-center">
            <Link onClick={scrollToTop}  to="/">
              <img src={logo} alt="LOGO" className="w-[153px] h-[39px]" />
            </Link>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {navLinks.slice(0,5).map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => handleClick(nav.title)}
                  className={`font-poppins font-normal cursor-pointer text-[16px]
                    ${active === nav.title ? "text-white" : "text-dimWhite"}
                    ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <Link onClick={scrollToTop} to={`${nav.id === "home" ? "/" : `/${nav.id}`}`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <Link onClick={scrollToTop} to="/refer&earn">
              <div style={{ marginLeft: "1rem" }}>
                <button className="text-dimWhite text-[11px] py-1 px-4 ms-8 rounded-[36px] border border-solid border-white border-opacity-60 flex  items-center">
                  Refer & Earn
                </button>
              </div>
            </Link> */}

            {/* Profile icon for desktop */}
            <div className="hidden sm:flex items-center">
              <Link onClick={scrollToTop} to="/profile">
                <img src={userImg} alt="Profile" className="w-8 h-8 mx-4 rounded-full" />
              </Link>
            </div>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? undefined : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              {/* Mobile menu */}
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } justify-center items-center fixed top-0 left-0 z-50 w-full bg-[#06030E] h-screen p-3 bg-gradient-to-tr`}
                style={{
                  backgroundImage: `url(${hamburgerBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundSize: "30rem",
                }}
              >
                <button
                  className="w-[31px] h-[31px] object-contain cursor-pointer text-dimWhite mt-6 absolute top-4 right-4"
                  onClick={() => setToggle(false)}
                >
                  <img src={close} alt="Close" />
                </button>

                {/* Logo in mobile menu */}
                <ul className="list-none flex flex-col justify-end items-center gap-4">
                  <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-6">
                    <img width={"200rem"} src={logo} alt="" />
                  </li>

                  {/* Navigation links in mobile menu */}
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
                               ? "text-white font-medium"
                               : "text-[#393F48]"
                           }
                           ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <Link onClick={scrollToTop} to={`${nav.id === "home" ? "/" : nav.id}`}>
                        {nav.title}
                      </Link>
                    </li>
                  ))}

                  {/* <Link onClick={scrollToTop} to="/refer&earn">
                    <li className="mt-4">
                      <button
                        onClick={() => setToggle(false)}
                        className="text-dimWhite text-[11px] py-1 px-4 rounded-[36px] border border-solid border-white border-opacity-60 flex  items-center"
                      >
                        Refer & Earn
                      </button>
                    </li>
                  </Link> */}

                  {/* Logout button in mobile menu */}
                  <li className="mt-4">
                    <button className="text-black font-semibold text-[11px] py-1 px-4 rounded-[4px] border-2 border-solid bg-white border-dimWhite border-opacity-60 flex items-center">
                      Logout{" "}
                      <img
                        className="ms-2"
                        width={"15rem"}
                        src={LogOut}
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
      <div className={`sm:pb-[3rem] pb-6`}>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;