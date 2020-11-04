import React, { Component } from "react";

class StayConnect extends Component {
  render() {
    return (
      <div className="p-t-50">
        <div className="how2 how2-cl4 flex-s-c">
          <h3 className="f1-m-2 cl3 tab01-title">Stay Connected</h3>
        </div>
        <ul className="p-t-35">
          <li className="flex-wr-sb-c p-b-20">
            <a
              href="#"
              className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0"
            >
              <span className="fab fa-facebook-f" />
            </a>
            <div className="size-w-3 flex-wr-sb-c">
              <span className="f1-s-8 cl3 p-r-20">6879 Fans</span>
              <a
                href="#"
                className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
              >
                Like
              </a>
            </div>
          </li>
          <li className="flex-wr-sb-c p-b-20">
            <a
              href="#"
              className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0"
            >
              <span className="fab fa-twitter" />
            </a>
            <div className="size-w-3 flex-wr-sb-c">
              <span className="f1-s-8 cl3 p-r-20">568 Followers</span>
              <a
                href="#"
                className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
              >
                Follow
              </a>
            </div>
          </li>
          <li className="flex-wr-sb-c p-b-20">
            <a
              href="#"
              className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0"
            >
              <span className="fab fa-youtube" />
            </a>
            <div className="size-w-3 flex-wr-sb-c">
              <span className="f1-s-8 cl3 p-r-20">5039 Subscribers</span>
              <a
                href="#"
                className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
              >
                Subscribe
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default StayConnect;
