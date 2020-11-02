import React, { Component } from "react";
import FeatureNewsItem from "./FeatureNewsItem";
import MostPopularNews from "./MostPopularNews";
import NewsItem from "./NewsItem";
class CategoryPage extends Component {
  render() {
    return (
      <div>
        {/* Breadcrumb*/}
        <div className="container">
          <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6">
              <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                Home
              </a>
              <span className="breadcrumb-item f1-s-3 cl9">Blog</span>
            </div>
          </div>
        </div>
        {/* Page heading */}
        <div className="container p-t-4 p-b-40">
          <h2 className="f1-l-1 cl2">News List</h2>
        </div>
        {/* Feature News */}
        <section className="bg0">
          <div className="container">
            <div className="row m-rl--1">
              <div className="col-12 p-rl-1 p-b-2">
                <div
                  className="bg-img1 size-a-3 how1 pos-relative"
                  style={{ backgroundImage: "url(images/entertaiment-16.jpg)" }}
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
                      Celebrity
                    </a>
                    <h3 className="how1-child2 m-t-14 m-b-10">
                      <a
                        href="blog-detail-01.html"
                        className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                      >
                        Music quisque at ipsum vel orci eleifend ultrices
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
              <FeatureNewsItem />
              <FeatureNewsItem />
              <FeatureNewsItem />
              <FeatureNewsItem />
            </div>
          </div>
        </section>
        <br />
        {/* List News */}
        <section className="bg0 p-b-55">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-80">
                <div className="p-r-10 p-r-0-sr991">
                  <div className="m-t--40 p-b-40">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                  </div>
                  <div class="flex-wr-s-c m-rl--7 p-t-15">
                    <a
                      href="#"
                      class="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 pagi-active"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="flex-c-c pagi-item hov-btn1 trans-03 m-all-7"
                    >
                      2
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-4 p-b-80">
                <div className="p-l-10 p-rl-0-sr991">
                  {/* Most Popular */}
                  <MostPopularNews/>
                  {/* Tag */}
                  <div>
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
                        Lifestyle
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        Denim
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        Streetstyle
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        Crafts
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        Magazine
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        News
                      </a>
                      <a
                        href="#"
                        className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                      >
                        Blogs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CategoryPage;
