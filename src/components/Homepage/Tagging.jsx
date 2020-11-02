import React, { Component } from "react";

class Tagging extends Component {
  render() {
    return (
        <div className="p-b-55">
        <div className="how2 how2-cl4 flex-s-c m-b-30">
          <h3 className="f1-m-2 cl3 tab01-title">Tags</h3>
        </div>
        <div className="flex-wr-s-s m-rl--5">
          <a
            href="#"
            className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
          >
            Fashion
          </a>
          <a
            href="#"
            className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
          >
            Blogs
          </a>
        </div>
      </div>
    
    );
  }
}

export default Tagging;
