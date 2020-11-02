import React, { Component } from "react";

class NewsItemLatest extends Component {
  render() {
    return (
      <div className="col-sm-6 p-r-25 p-r-15-sr991">
        {/* Item latest */}
        <div className="m-b-45">
          <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
            <img src="images/latest-03.jpg" alt="IMG" />
          </a>
          <div className="p-t-16">
            <h5 className="p-b-5">
              <a
                href="blog-detail-01.html"
                className="f1-m-3 cl2 hov-cl10 trans-03"
              >
                You wish lorem ipsum dolor sit amet consectetur
              </a>
            </h5>
            <span className="cl8">
              <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                by John Alvarado
              </a>
              <span className="f1-s-3 m-rl-3">-</span>
              <span className="f1-s-3">Feb 13</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemLatest;
