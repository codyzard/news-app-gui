import React, { Component } from "react";

class LastesNews_Category extends Component {
  render() {
    console.log();
    return (
      <div className="col-3">
        {/* Item post */}
        <div>
          <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
            <img src={this.props.img_src} alt="IMG" />
          </a>
          <div className="p-t-10">
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
              <span className="f1-s-3">Feb 18</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LastesNews_Category;
