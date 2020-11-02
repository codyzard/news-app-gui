import React, { Component } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Topbar_DesktopHeader from "./Topbar_DesktopHeader";
import { connect } from "react-redux";
import { getAllCategoriesRequest } from "./../../../actions/index";
class DesktopHeader extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllCategories();
  }
  render() {
    var { categories } = this.props;
    var mainCate = Object.keys(categories);
    var subCate = Object.values(categories);
    var categoryList = mainCate.map((c, index) => {
      return <Category key={index} category={c} childCate={subCate[index]} />;
    });
    return (
      <div>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <Topbar_DesktopHeader />
          {/*  */}
          <div className="wrap-main-nav">
            <div className="main-nav">
              {/* Menu desktop */}
              <nav className="menu-desktop">
                <a className="logo-stick" href="index.html">
                  <img src="images/icons/logo-01.png" alt="LOGO" />
                </a>
                <ul className="main-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {categoryList}
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
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllCategories: () => {
      dispatch(getAllCategoriesRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader);
