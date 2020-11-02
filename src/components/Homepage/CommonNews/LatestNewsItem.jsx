import React, { Component } from "react";

class LatestNewsItem extends Component {
  render() {
    return (
      <div className="flex-wr-sb-s m-b-30">
        <a
          href="blog-detail-01.html"
          className="size-w-1 wrap-pic-w hov1 trans-03"
        >
          <img src="images/post-06.jpg" alt="IMG" />
        </a>
        <div className="size-w-2">
          <h5 className="p-b-5">
            <a
              href="blog-detail-01.html"
              className="f1-s-5 cl3 hov-cl10 trans-03"
            >
              Donec metus orci, malesuada et lectus vitae
            </a>
          </h5>
          <span className="cl8">
            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
              Music
            </a>
            <span className="f1-s-3 m-rl-3">-</span>
            <span className="f1-s-3">Feb 17</span>
          </span>
        </div>
      </div>
    );
  }
}

export default LatestNewsItem;
