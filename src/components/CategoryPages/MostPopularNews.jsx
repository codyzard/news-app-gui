import React, { Component } from "react";
import MostPopularNewsItem from "./MostPopularNewsItem";

class MostPopularNews extends Component {
  render() {
    return (
      <div className="p-b-30">
        <div className="how2 how2-cl4 flex-s-c">
          <h3 className="f1-m-2 cl3 tab01-title">Most Popular News</h3>
        </div>
        <ul className="p-t-35">
            <MostPopularNewsItem/>
            <MostPopularNewsItem/>
            <MostPopularNewsItem/>
        </ul>
      </div>
    );
  }
}

export default MostPopularNews;
