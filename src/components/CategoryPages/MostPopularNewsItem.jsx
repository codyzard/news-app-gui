import React, { Component } from "react";

class MostPopularNewsItem extends Component {
  render() {
    return (
      <li className="flex-wr-sb-s p-b-30">
        <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
          <img src="images/popular-post-04.jpg" alt="IMG" />
        </a>
        <div className="size-w-11">
          <h6 className="p-b-4">
            <a
              href="blog-detail-02.html"
              className="f1-s-5 cl3 hov-cl10 trans-03"
            >
              Donec metus orci, malesuada et lectus vitae
            </a>
          </h6>
          <span className="cl8 txt-center p-b-24">
            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
              Music
            </a>
            <span className="f1-s-3 m-rl-3">-</span>
            <span className="f1-s-3">Feb 18</span>
          </span>
        </div>
      </li>
    );
  }
}

export default MostPopularNewsItem;
