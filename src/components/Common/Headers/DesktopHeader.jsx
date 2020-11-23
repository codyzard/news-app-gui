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
  async componentDidMount() {
    await this.props.getAllCategories();
  }
  render() {
    var { categories } = this.props;
    var categoryList = categories.map((c, index) => {
      return (
        <Category
          key={index}
          category={c}
          childCate={c.sub_cate}
        />
      );
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
                <Link className="logo-stick" to="/">
                  <img src="images/logoSTE.png" alt="LOGO" />
                </Link>
                <ul className="main-menu">
                  <li>
                    <Link to="/">{"Trang chủ"}</Link>
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
