import React, { Component } from "react";

class EveryImage extends Component {
  render() {
    var { image } = this.props;
    return (
      <div className="wrap-pic-max-w p-b-30">
        <img src={image ? image.src : ""} alt="IMG" />
        <figcaption style={{textAlign: "center"}}>{image && image.description ? image.description : ""}</figcaption>
      </div>
    );
  }
}

export default EveryImage;
