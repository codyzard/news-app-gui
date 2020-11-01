import React, { Component } from "react";

class Topbar_DestopHeader extends Component {
  render() {
    return (
      <div>
        {/* Topbar */}
        <div className="topbar">
          <div className="content-topbar container h-100">
            <div className="left-topbar">
              <span className="left-topbar-item flex-wr-s-c">
                <span>Viet Nam</span>
                <img
                  className="m-b-1 m-rl-8"
                  src="images/icons/icon-night.png"
                  alt="IMG"
                />
                <span>HI 58° LO 56°</span>
              </span>
              <a href="#" className="left-topbar-item">
                About
              </a>
              <a href="#" className="left-topbar-item">
                Contact
              </a>
            </div>
            <div className="right-topbar">
              <a href="#">
                <span className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <span className="fab fa-twitter" />
              </a>
              <a href="#">
                <span className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <span className="fab fa-vimeo-v" />
              </a>
              <a href="#">
                <span className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-logo container">
          {/* Logo desktop */}
          <div className="logo">
            <a href="index.html">
              <img src="images/icons/logo-01.png" alt="LOGO" />
            </a>
          </div>
          {/* Banner */}
          <div className="banner-header">
            <a href="#">
              <img src="images/banner-01.jpg" alt="IMG" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar_DestopHeader;
