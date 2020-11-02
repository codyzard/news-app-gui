import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Category from "./Category";

class MobileHeader extends Component {
  render() {
    var { categories } = this.props;
    var categories = Object.keys(categories);
    var categoryList = categories.map((category, index) => {
      return (
        <li key={index}>
          <Link to="">{category}</Link>
          <ul className="sub-menu-m">
            <li>
              <a href="category-01.html">Category Page v1</a>
            </li>
            <li>
              <a href="category-02.html">Category Page v2</a>
            </li>
          </ul>
          {/* <span className="arrow-main-menu-m">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span> */}
        </li>
      );
    });
    return (
      <div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <Link to="/">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </Link>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li className="left-topbar">
              <span className="left-topbar-item flex-wr-s-c">
                <span>New York, NY</span>
                <img
                  className="m-b-1 m-rl-8"
                  src="images/icons/icon-night.png"
                  alt="IMG"
                />
                <span>HI 58° LO 56°</span>
              </span>
            </li>
            <li className="left-topbar">
              <a href="#" className="left-topbar-item">
                About
              </a>
              <a href="#" className="left-topbar-item">
                Contact
              </a>
            </li>
            <li className="right-topbar">
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
            </li>
          </ul>
          <ul className="main-menu-m">
            <li>
              <Link to="/">Home</Link>
            </li>
            {categoryList}
            <li>
              <a href="#">Features</a>
              <ul className="sub-menu-m">
                <li>
                  <a href="category-01.html">Category Page v1</a>
                </li>
                <li>
                  <a href="category-02.html">Category Page v2</a>
                </li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
          </ul>
        </div>
        {/*  */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
export default connect(mapStateToProps, null)(MobileHeader);
