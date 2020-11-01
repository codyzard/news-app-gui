import React, { Component } from "react";
import LastesNews_Category from "./LatestNews_Category";

class Category extends Component {
  render() {
    return (
        <li className="mega-menu-item">
          <a href="category-01.html">News</a>
          <div className="sub-mega-menu">
            <div className="nav flex-column nav-pills" role="tablist">
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#news-0"
                role="tab"
              >
                All
              </a>
              <a
                className="nav-link"
                data-toggle="pill"
                href="#news-1"
                role="tab"
              >
                Entertaiment
              </a>
              <a
                className="nav-link"
                data-toggle="pill"
                href="#news-2"
                role="tab"
              >
                Fashion
              </a>
              <a
                className="nav-link"
                data-toggle="pill"
                href="#news-3"
                role="tab"
              >
                Life Style
              </a>
              <a
                className="nav-link"
                data-toggle="pill"
                href="#news-4"
                role="tab"
              >
                Technology
              </a>
              <a
                className="nav-link"
                data-toggle="pill"
                href="#news-5"
                role="tab"
              >
                Travel
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane show active" id="news-0" role="tabpanel">
                <div className="row">
                    <LastesNews_Category img_src={"images/post-05.jpg"}/>
                    <LastesNews_Category img_src={"images/post-08.jpg"}/>
                    <LastesNews_Category img_src={"images/post-09.jpg"}/>
                    <LastesNews_Category img_src={"images/post-10.jpg"}/>
                </div>
              </div>
            </div>
          </div>
        </li>
    );
  }
}

export default Category;
