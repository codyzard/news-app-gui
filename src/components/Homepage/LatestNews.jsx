import React, { Component } from "react";
import Subscribe from "./Subscribe";
import FeatureVideo from "./FeatureVideo";
import NewsItemLatest from "./NewsItemLatest";
import Tagging from "./Tagging";

class LatestNews extends Component {
  render() {
    return (
      <section className="bg0 p-t-60 p-b-35">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 p-b-20">
              <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                <h3 className="f1-m-2 cl3 tab01-title">Latest News</h3>
              </div>
              <div className="row p-t-35">
                <NewsItemLatest />
                <NewsItemLatest />
                <NewsItemLatest />
                <NewsItemLatest />
                <NewsItemLatest />
                <NewsItemLatest />
              </div>
            </div>
            <div className="col-md-10 col-lg-4">
              <div className="p-l-10 p-rl-0-sr991 p-b-20">
                {/* Video */}
                <FeatureVideo />
                {/* Subscribe */}
                <Subscribe/>
                {/* Tag */}
                <Tagging />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNews;
