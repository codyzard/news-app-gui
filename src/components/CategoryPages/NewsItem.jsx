import { isEmpty } from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {scrollOnTopFeatureNews} from './../../utils/helper_func'

class NewsItem extends Component {
  render() {
    var {news} = this.props
    var news_src = ""
    if(isEmpty(news.author_id)){
      news_src = news.news_src ? news.news_src : "Lê Hoàng Tú";
    }
    else{
      // news_src = author
    }
    return (
      <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
        <Link to={"/news/"+news.id+"-"+news.slug}
          className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
          onClick={(e) => {scrollOnTopFeatureNews(e)}}
        >
          <img src={news.title_img} alt="IMG" />
        </Link>
        <div className="size-w-9 w-full-sr575 m-b-25">
          <h5 className="p-b-12">
            <Link
              to={"/news/"+news.id+"-"+news.slug}
              className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
              onClick={(e) => {scrollOnTopFeatureNews(e)}}
            >
              {news.title}
            </Link>
          </h5>
          <div className="cl8 p-b-18">
            <a href={"http://"+news_src} className="f1-s-4 cl8 hov-cl10 trans-03">
              {"Viết bởi " + news_src}
            </a>
            <span className="f1-s-3 m-rl-3">-</span>
            <span className="f1-s-3">{news.date_publish}</span>
          </div>
          <p className="f1-s-1 cl6 p-b-24">
            {news.summary}
          </p>
          <Link
            to={"/news/"+news.id+"-"+news.slug}
            className="f1-s-1 cl9 hov-cl10 trans-03"
          >
            {"Xem thêm"}
            <i className="m-l-2 fa fa-long-arrow-alt-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
