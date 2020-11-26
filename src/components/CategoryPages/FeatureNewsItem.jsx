import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeatureNewsItem extends Component {
  render() {
    var {news} = this.props;
    return (
      <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
        <div
          className="bg-img1 size-a-14 how1 pos-relative"
          style={{ backgroundImage: "url("+news.title_img+")" }}
        >
          <Link
            to={"/news/"+news.id+"-"+news.slug}
            className="dis-block how1-child1 trans-03"
          />
          <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
            <a
              className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
              style={{color: "white"}}
              href="#"
            >
              {news.categories[1].name}
            </a>
            <h3 className="how1-child2 m-t-14">
              <Link
                to={"/news/"+news.id+"-"+news.slug}
                className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
              >
                {news.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureNewsItem;
