import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-c-c">
          <a href="#">
            <img className="max-w-full" src="images/banner-01.jpg" alt="IMG" />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
