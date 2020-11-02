import React, { Component } from "react";

class FeatureVideo extends Component {
  render() {
    return (
      <div className="p-b-55">
        <div className="how2 how2-cl4 flex-s-c m-b-35">
          <h3 className="f1-m-2 cl3 tab01-title">Featured Video</h3>
        </div>
        <div>
          <div className="wrap-pic-w pos-relative">
            <img src="images/video-01.jpg" alt="IMG" />
            <button
              className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03"
              data-toggle="modal"
              data-target="#modal-video-01"
            >
              <span className="fab fa-youtube" />
            </button>
          </div>
          <div className="p-tb-16 p-rl-25 bg3">
            <h5 className="p-b-5">
              <a href="#" className="f1-m-3 cl0 hov-cl10 trans-03">
                Music lorem ipsum dolor sit amet consectetur
              </a>
            </h5>
            <span className="cl15">
              <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                by John Alvarado
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

export default FeatureVideo;
