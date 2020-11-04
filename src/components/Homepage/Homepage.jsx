import React, { Component } from "react";
import Banner from "../Common/Headers/Banner";
import CommonNews from "../Homepage/CommonNews/CommonNews";
import FeatureNews from "../Homepage/FeatureNews";
import LatestNews from "./RandomLatestNews/LatestNews";

class Homepage extends Component {
  render() {
    return (
      <div>
        {/* Feature post */}
        <FeatureNews />
        {/* Post */}
        <CommonNews />
        {/* Banner */}
        <Banner />
        {/* Latest */}
        <LatestNews />
        {/* Footer */}
      </div>
    );
  }
}

export default Homepage;
