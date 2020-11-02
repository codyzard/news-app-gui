import React, { Component } from "react";
import BackToTop from "../Common/Controls/BackToTop";
import Headline from "../Common/Controls/Headline";
import Footer from "../Common/Footers/Footer";
import Banner from "../Common/Headers/Banner";
import Header from "../Common/Headers/Header";
import ModalVideo from "../Common/Modals/ModalVideo";
import CommonNews from "../Homepage/CommonNews/CommonNews";
import FeatureNews from "../Homepage/FeatureNews";
import LatestNews from "../Homepage/LatestNews";

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
