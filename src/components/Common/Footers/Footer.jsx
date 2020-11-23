import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <div className="bg2 p-t-40 p-b-25">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div> */}
        <div className="bg11">
          <div className="container size-h-4 flex-c-c p-tb-15">
            <span className="f1-s-1 cl0 txt-center">
              Copyright © 2020 Được phát triển
              <a href="#" className="f1-s-1 cl10 hov-link1">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                {""}
                <i className="fab fa-dev" aria-hidden="true" /> {"bởi"}{" "}
              </a>
              <a href="https://fb.com/mrahn123" target="_blank">
                {"Lê Hoàng Tú"}
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
