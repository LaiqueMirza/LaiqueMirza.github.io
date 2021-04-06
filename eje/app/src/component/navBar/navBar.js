import React, { useState } from "react";
import "./navBar.css";
import logoNav from "../../img/logoNav.svg";
import cartLogo from "../../img/cartLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clickCheck, setClickCheck] = useState(false);

  const hamburgerClicked = () => {
    let element = document.querySelector("#navBarHamburgerDisplay");
    console.log(clickCheck);
    setClickCheck(!clickCheck);
    clickCheck
      ? element.classList.add("navBarActive")
      : element.classList.remove("navBarActive");
    // classList.add("navBarActive")
  };

  return (
    <div className="navBar">
      <nav className="navBarNav">
        <div className="navBarDiv">
          <div className="navBarImgDiv">
            <img className="navBarImg" src={logoNav} alt="nav-logo" />
          </div>
          <div className="navBarTextDiv">
            <span className="navBarItems ">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Home
              </Link>
            </span>
            <span className="navBarItems ">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                About
              </Link>
            </span>
            <span className="navBarItems ">
              <Link
                to="/shop"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Shop
              </Link>
            </span>
            <span className="navBarItems ">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Contact
              </Link>
            </span>

            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <div className="navBarCartImageDiv">
                <img className="navBarCart" src={cartLogo} alt="nav-logo" />
              </div>
            </Link>
            <div className="navBarCountsDiv">
              <span className="navBarCounts">0</span>
            </div>

            <div
              onClick={() => hamburgerClicked()}
              className="navBarHamburgerDiv"
              id="menuToggle"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="navBarHamburgerOpen navBarActive"
        id="navBarHamburgerDisplay"
      >
        <h4 onClick={() => hamburgerClicked()} className="navBarHamburgerItems">
          <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
            Home
          </Link>
        </h4>
        <h4 onClick={() => hamburgerClicked()} className="navBarHamburgerItems">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            About
          </Link>
        </h4>
        <h4 onClick={() => hamburgerClicked()} className="navBarHamburgerItems">
          <Link
            to="/shop"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            Shop
          </Link>
        </h4>
        <h4 onClick={() => hamburgerClicked()} className="navBarHamburgerItems">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            Contact
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default NavBar;
