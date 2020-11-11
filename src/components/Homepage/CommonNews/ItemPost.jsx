import React, { Component } from "react";
import { Link } from "react-router-dom";
import {scrollOnTopFeatureNews} from './../../../utils/helper_func'
class ItemPost extends Component {
  render() {
    var {news} = this.props
    return (
      <div className="flex-wr-sb-s m-b-30">
        <Link
          to={"/news/"+news.id+"-"+news.slug}
          className="size-w-1 wrap-pic-w hov1 trans-03"
          onClick={(e) => {scrollOnTopFeatureNews(e)}}
        >
          <img src={news.title_img} alt="IMG" />
        </Link>
        <div className="size-w-2">
          <h5 className="p-b-5">
            <Link
              to={"/news/"+news.id+"-"+news.slug}
              className="f1-s-5 cl3 hov-cl10 trans-03"
              onClick={(e) => {scrollOnTopFeatureNews(e)}}
            >
             {news.title}
            </Link>
          </h5>
          <span className="cl8">
            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
              {"Lượt xem: " +news.view_count}
            </a>
            <span className="f1-s-3 m-rl-3">-</span>
            <span className="f1-s-3">{news.date_publish}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default ItemPost;
