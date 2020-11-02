import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeatureNewsItem extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
        <div
          className="bg-img1 size-a-14 how1 pos-relative"
          style={{ backgroundImage: "url(images/entertaiment-04.jpg)" }}
        >
          <a
            href="blog-detail-01.html"
            className="dis-block how1-child1 trans-03"
          />
          <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
            <a
              href="#"
              className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
            >
              Game
            </a>
            <h3 className="how1-child2 m-t-14">
              <a
                href="blog-detail-01.html"
                className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
              >
                Pellentesque dui nibh, pellen-tesque ut dapibus ut
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureNewsItem;
