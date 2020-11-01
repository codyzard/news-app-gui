import React, { Component } from "react";
import Category from "./Category";
import Topbar_DesktopHeader from "./Topbar_DesktopHeader";
class DesktopHeader extends Component {
  render() {
    return (
      <div>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <Topbar_DesktopHeader/>
          {/*  */}
          <div className="wrap-main-nav">
            <div className="main-nav">
              {/* Menu desktop */}
              <nav className="menu-desktop">
                <a className="logo-stick" href="index.html">
                  <img src="images/icons/logo-01.png" alt="LOGO" />
                </a>
                <ul className="main-menu">
                  <li className="main-menu-active">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Homepage v1</a>
                      </li>
                    </ul>
                  </li>
                  <Category/>
                  <Category/>
                  <Category/>
                  <li>
                    <a href="#">Features</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="category-01.html">Category Page v1</a>
                      </li>
                      <li>
                        <a href="category-02.html">Category Page v2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopHeader;
