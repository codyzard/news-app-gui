import React, { Component } from "react";

class MostPopular extends Component {
  render() {
    return (
      <div className="col-md-10 col-lg-4">
        <div className="p-l-10 p-rl-0-sr991 p-b-20">
          {/*  */}
          <div>
            <div className="p-b-30">
              <div className="how2 how2-cl4 flex-s-c">
                <h3 className="f1-m-2 cl3 tab01-title">Most Popular News</h3>
              </div>
              <ul className="p-t-35">
                <li className="flex-wr-sb-s p-b-30">
                  <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-04.jpg" alt="IMG" />
                  </a>
                  <div className="size-w-11">
                    <h6 className="p-b-4">
                      <a
                        href="blog-detail-02.html"
                        className="f1-s-5 cl3 hov-cl10 trans-03"
                      >
                        Donec metus orci, malesuada et lectus vitae
                      </a>
                    </h6>
                    <span className="cl8 txt-center p-b-24">
                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                        Music
                      </a>
                      <span className="f1-s-3 m-rl-3">-</span>
                      <span className="f1-s-3">Feb 18</span>
                    </span>
                  </div>
                </li>
                <li className="flex-wr-sb-s p-b-30">
                  <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-05.jpg" alt="IMG" />
                  </a>
                  <div className="size-w-11">
                    <h6 className="p-b-4">
                      <a
                        href="blog-detail-02.html"
                        className="f1-s-5 cl3 hov-cl10 trans-03"
                      >
                        Donec metus orci, malesuada et lectus vitae
                      </a>
                    </h6>
                    <span className="cl8 txt-center p-b-24">
                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                        Game
                      </a>
                      <span className="f1-s-3 m-rl-3">-</span>
                      <span className="f1-s-3">Feb 16</span>
                    </span>
                  </div>
                </li>
                <li className="flex-wr-sb-s p-b-30">
                  <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-06.jpg" alt="IMG" />
                  </a>
                  <div className="size-w-11">
                    <h6 className="p-b-4">
                      <a
                        href="blog-detail-02.html"
                        className="f1-s-5 cl3 hov-cl10 trans-03"
                      >
                        Donec metus orci, malesuada et lectus vitae
                      </a>
                    </h6>
                    <span className="cl8 txt-center p-b-24">
                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                        Celebrity
                      </a>
                      <span className="f1-s-3 m-rl-3">-</span>
                      <span className="f1-s-3">Feb 12</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="flex-c-s p-t-8">
            <a href="#">
              <img
                className="max-w-full"
                src="images/banner-02.jpg"
                alt="IMG"
              />
            </a>
          </div>
          {/*  */}
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
        </div>
      </div>
    );
  }
}

export default MostPopular;
