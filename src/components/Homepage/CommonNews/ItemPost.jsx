import React, { Component } from "react";

class ItemPost extends Component {
  render() {
    var {news} = this.props
    return (
      <div className="flex-wr-sb-s m-b-30">
        <a
          href="blog-detail-01.html"
          className="size-w-1 wrap-pic-w hov1 trans-03"
        >
          <img src={news.title_img} alt="IMG" />
        </a>
        <div className="size-w-2">
          <h5 className="p-b-5">
            <a
              href="blog-detail-01.html"
              className="f1-s-5 cl3 hov-cl10 trans-03"
            >
             {news.title}
            </a>
          </h5>
          <span className="cl8">
            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
              Music
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
