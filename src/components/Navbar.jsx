import React, { useEffect, useState } from "react";
import { logo, menu, hamburgerBg, LogOut, close, login } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Home/Footer";
import { useUserSession } from "../constants/userContext";
import { motion } from "framer-motion";

const Navbar = ({ token }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = useUserSession();

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
      setActive(null);
    }
  }, [location]);

  const handleClick = (title) => {
    setActive(title);
  };

  const handleLoginPopup = () => {
    navigate("/signup");
  };

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    window.location.reload();
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <motion.div
        key={location.pathname}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.paddingX} ${
          styles.flexCenter
        } fixed top-0 z-50 w-full ${
          isScrolled ? styles.transparentNavbar : styles.scrolledNavbar
        }`}
      >
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex md:py-5 py-4 justify-between items-center">
            <Link onClick={scrollToTop} to="/">
              <img src={logo} alt="LOGO" className="w-[153px] h-[39px]" />
            </Link>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {navLinks.slice(0, 5).map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => handleClick(nav.title)}
                  className={`font-poppins font-normal cursor-pointer text-[16px]
                    ${active === nav.title ? "text-white" : "text-dimWhite"}
                    ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <Link
                    onClick={scrollToTop}
                    to={`${nav.id === "home" ? "/" : `/${nav.id}`}`}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>

            {token ? (
              <div className="hidden sm:flex items-center">
                <Link onClick={scrollToTop} to="/profile">
                  <img
                    src={userData?.userImagePath || login}
                    alt="Profile"
                    className="w-8 h-8 mx-4 rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center">
                <button
                  className="border-2 px-4 py-1 rounded-[6px] bg-lightWhite md:text-sm text-xs font-[500]"
                  onClick={handleLoginPopup}
                >
                  Login
                </button>
              </div>
            )}

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? undefined : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <motion.div
                initial={false}
                animate={toggle ? "open" : "closed"}
                variants={menuVariants}
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

                <ul className="list-none flex flex-col justify-end items-center gap-4">
                  <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-6">
                    <img width={"200rem"} src={logo} alt="" />
                  </li>

                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                      className={`font-poppins font-normal cursor-pointer
                           ${
                             active === nav.title
                               ? "text-gradient font-semibold text-xl"
                               : "text-white"
                           }
                           ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <Link
                        onClick={scrollToTop}
                        to={`${nav.id === "home" ? "/" : nav.id}`}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  ))}

                  <li className="mt-4">
                    {token ? (
                      <button
                        onClick={handleLogOut}
                        className="text-black font-semibold text-[11px] py-1 px-4 rounded-[4px] border-2 border-solid bg-white border-dimWhite border-opacity-60 flex items-center"
                      >
                        Logout{" "}
                        <img
                          className="ms-2"
                          width={"15rem"}
                          src={LogOut}
                          alt=""
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/signup")}
                        className="text-black font-semibold text-[11px] py-1 px-4 rounded-[4px] border-2 border-solid bg-white border-dimWhite border-opacity-60 flex items-center"
                      >
                        Login{" "}
                        <img
                          className="ms-2"
                          width={"15rem"}
                          src={LogOut}
                          alt=""
                        />
                      </button>
                    )}
                  </li>
                </ul>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
