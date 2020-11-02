import React, { Component } from "react";
import { Link } from "react-router-dom";
import LastesNews_Category from "./LatestNews_Category";

class Category extends Component {
  render() {
    var { childCate } = this.props;
    var childCateList = childCate.map((child, index) => {
      return (
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          data-toggle="pill"
          href={"#news-"+child+'-'+index}
          role="tab"
          key = {index}
        >
          {child}
        </a>
      );
    });
    var tabPanel = childCate.map((child, index) => {
      return (
        <div
          className={index === 0 ? "tab-pane show active" : "tab-pane show"}
          id={"news-"+child+'-'+index}
          role="tabpanel"
          key = {index}
        >
          <div className="row">
            <LastesNews_Category img_src={"images/post-05.jpg"} />
            <LastesNews_Category img_src={"images/post-08.jpg"} />
            <LastesNews_Category img_src={"images/post-09.jpg"} />
            <LastesNews_Category img_src={"images/post-10.jpg"} />
          </div>
        </div>
      );
    });

    return (
      <li className="mega-menu-item">
        <Link to="/category">{this.props.category}</Link>
        <div className="sub-mega-menu">
          <div className="nav flex-column nav-pills" role="tablist">
          {childCateList}
          </div>
          <div className="tab-content">
            {tabPanel}
          </div>
        </div>
      </li>
    );
  }
}

export default Category;
