import React, { Component } from "react";

class Headline extends Component {
  render() {
    return (
      <div className="container" id="list_feature_news">
        <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
          <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
            <span className="text-uppercase cl2 p-r-8">Trending Now:</span>
            <span
              className="dis-inline-block cl6 slide100-txt pos-relative size-w-0"
              data-in="fadeInDown"
              data-out="fadeOutDown"
            >
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Interest rate angst trips up US equity bull market
              </span>
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Designer fashion show kicks off Variety Week
              </span>
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Microsoft quisque at ipsum vel orci eleifend ultrices
              </span>
            </span>
          </div>
          <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
            <input
              className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
              type="text"
              name="search"
              placeholder="Search"
            />
            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
              <i className="zmdi zmdi-search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;
