import React, { Component } from "react";

class FeatureNews extends Component {
  render() {
    return (
      <section className="bg0">
        <div className="container">
          <div className="row m-rl--1">
            <div className="col-md-6 p-rl-1 p-b-2">
              <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{ backgroundImage: "url(images/post-01.jpg)" }}
              >
                <a
                  href="blog-detail-01.html"
                  className="dis-block how1-child1 trans-03"
                />
                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                  <a
                    href="#"
                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                  >
                    Business
                  </a>
                  <h3 className="how1-child2 m-t-14 m-b-10">
                    <a
                      href="blog-detail-01.html"
                      className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                    >
                      Microsoft quisque at ipsum vel orci eleifend ultrices
                    </a>
                  </h3>
                  <span className="how1-child2">
                    <span className="f1-s-4 cl11">Jack Sims</span>
                    <span className="f1-s-3 cl11 m-rl-3">-</span>
                    <span className="f1-s-3 cl11">Feb 16</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-rl-1">
              <div className="row m-rl--1">
                <div className="col-12 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-4 how1 pos-relative"
                    style={{ backgroundImage: "url(images/post-02.jpg)" }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    />
                    <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                      <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Culture
                      </a>
                      <h3 className="how1-child2 m-t-14">
                        <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                        >
                          London ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{ backgroundImage: "url(images/post-03.jpg)" }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    />
                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Life Style
                      </a>
                      <h3 className="how1-child2 m-t-14">
                        <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Pellentesque dui nibh, pellen-tesque ut dapibus ut
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{ backgroundImage: "url(images/post-04.jpg)" }}
                  >
                    <a
                      href="blog-detail-01.html"
                      className="dis-block how1-child1 trans-03"
                    />
                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      <a
                        href="#"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Sport
                      </a>
                      <h3 className="how1-child2 m-t-14">
                        <a
                          href="blog-detail-01.html"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Motobike Vestibulum vene-natis purus nec nibh volutpat
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureNews;
