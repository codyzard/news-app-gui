import React, { Component } from "react";
import { Link } from "react-router-dom";
import { scrollOnTopFeatureNews } from "./../../../utils/helper_func";
class NewsItemLatest extends Component {
  render() {
    var { news } = this.props;
    return (
      <div className="col-sm-6 p-r-25 p-r-15-sr991">
        {/* Item latest */}
        <div className="m-b-45">
          <Link
            to={"/news/" + news.id + "-" + news.slug}
            className="wrap-pic-w hov1 trans-03"
            onClick={(e) => {
              scrollOnTopFeatureNews(e);
            }}
          >
            <img src={news.title_img} alt="IMG" />
          </Link>
          <div className="p-t-16">
            <h5 className="p-b-5">
              <Link
                to={"/news/" + news.id + "-" + news.slug}
                className="f1-m-3 cl2 hov-cl10 trans-03"
                onClick={(e) => {
                  scrollOnTopFeatureNews(e);
                }}
              >
                {news.title}
              </Link>
            </h5>
            <span className="cl8">
              <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                {"Lượt xem: " + news.view_count}
              </a>
              <span className="f1-s-3 m-rl-3">-</span>
              <span className="f1-s-3">{news.date_publish}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemLatest;
