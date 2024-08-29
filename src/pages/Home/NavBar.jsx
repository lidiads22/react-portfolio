// Importing necessary React hooks and the Link component from react-scroll
import { useEffect, useState } from "react";

import { Link } from "react-scroll";

function Navbar() {
  // State to manage whether the navigation menu is active (open) or not
  const [navActive, setNavActive] = useState(false);

  // Function to toggle the navigation menu's active state
  const toggleNav = () => {
    setNavActive(!navActive); // Toggles the navActive state between true and false
  };

  // Function to close the navigation menu
  const closeMenu = () => {
    setNavActive(false); // Sets navActive to false, closing the menu
  };

  // useEffect hook to handle menu behavior on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); // Automatically close the menu if the window width is 500px or less
      }
    };

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the resize event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  // useEffect hook to handle initial menu state based on window size
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); // Automatically close the menu if the window width is 1200px or less on component mount
    }
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
    <div>
      <img src="./img/sTory' (1).jpg" alt="Portfolio" />
    </div>
    <a
      className={`nav__hamburger ${navActive ? "active" : ""}`}
      onClick={toggleNav}
    >
      <span className="nav__hamburger__line"></span>
      <span className="nav__hamburger__line"></span>
      <span className="nav__hamburger__line"></span>
    </a>
    <div className={`navbar--items ${navActive ? "active" : ""}`}>
      <ul>
        <li>
          <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>

          {/* Portfolio Link */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>

          {/* About Me Link */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>

          {/* Contact Me Link */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
