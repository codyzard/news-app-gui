import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { featureNewsRequest } from "./../../actions/index";
import { scrollOnTopFeatureNews } from "../../utils/helper_func";
class FeatureNews extends Component {
  async componentDidMount() {
    await this.props.featureNews();
  }
  render() {
    var { feature_news } = this.props;
    var bigFeatureNews = feature_news[0];
    var mediumFeatureNews = feature_news[1];
    var smallFeatureNews = feature_news.map((news, index) => {
      if (index < 2) return;
      var img_src = index === 2 ? "sport_banner.jpeg" : "esport_banner.jpg";
      return (
        <div className="col-sm-6 p-rl-1 p-b-2" key={index}>
          <div
            className="bg-img1 size-a-5 how1 pos-relative"
            style={{ backgroundImage: "url(images/" + img_src + ")" }}
          >
            <Link
              to={'news/'+news.id+"-"+news.slug}
              className="dis-block how1-child1 trans-03"
            />
            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
              <span
                href="#"
                className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
              >
                {index === 2 ? "Thể thao" : "E-sport"}
              </span>
              <h3 className="how1-child2 m-t-14">
                <Link
                  to={'news/'+news.id+"-"+news.slug}
                  className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                >
                  {news.title}
                </Link>
              </h3>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="bg0">
        <div className="container">
          <div className="row m-rl--1">
            <div className="col-md-6 p-rl-1 p-b-2">
              <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{ backgroundImage: "url(images/EPL_bg_homepage.jpg)" }}
              >
                <Link
                  to={
                    bigFeatureNews
                      ? "/news/" + bigFeatureNews.id + "-" + bigFeatureNews.slug
                      : "/"
                  }
                  className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                  onClick={(e) => {
                    scrollOnTopFeatureNews(e);
                  }}
                  className="dis-block how1-child1 trans-03"
                />
                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                  <span
                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                  >
                    Ngoại hạng anh
                  </span>
                  <h3 className="how1-child2 m-t-14 m-b-10">
                    <Link
                      to={
                        bigFeatureNews
                          ? "/news/" +
                            bigFeatureNews.id +
                            "-" +
                            bigFeatureNews.slug
                          : "/"
                      }
                      className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                      onClick={(e) => {
                        scrollOnTopFeatureNews(e);
                      }}
                      className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                    >
                      {bigFeatureNews ? bigFeatureNews.title : ""}
                    </Link>
                  </h3>
                  <span className="how1-child2">
                    <span className="f1-s-4 cl11">Jack Sims</span>
                    <span className="f1-s-3 cl11 m-rl-3">-</span>
                    <span className="f1-s-3 cl11">
                      {bigFeatureNews ? bigFeatureNews.date_publish : ""}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-rl-1">
              <div className="row m-rl--1">
                <div className="col-12 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-4 how1 pos-relative"
                    style={{
                      backgroundImage: "url(images/feature-news-homepage.jpg)",
                    }}
                  >
                    <Link
                      to={
                        mediumFeatureNews
                          ? "/news/" +
                            mediumFeatureNews.id +
                            "-" +
                            mediumFeatureNews.slug
                          : "/"
                      }
                      className="dis-block how1-child1 trans-03"
                    />
                    <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                      <span
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        {"Bóng đá"}
                      </span>
                      <h3 className="how1-child2 m-t-14">
                        <Link
                          to={
                            mediumFeatureNews
                              ? "/news/" +
                                mediumFeatureNews.id +
                                "-" +
                                mediumFeatureNews.slug
                              : "/"
                          }
                          className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                        >
                          {mediumFeatureNews ? mediumFeatureNews.title : ""}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                {smallFeatureNews}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feature_news: state.feature_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    featureNews: () => {
      return dispatch(featureNewsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FeatureNews);
