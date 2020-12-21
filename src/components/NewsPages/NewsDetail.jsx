import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Puff } from "@agney/react-loading";
import { getNewsDetailRequest } from "../../actions/index";
import { connect } from "react-redux";
import Tag from "./Tag";
import EveryImage from "./EveryImage";
import { isEmpty, join } from "lodash";
import EveryLine from "./EveryLine";
import { FacebookProvider, Comments, Share } from "react-facebook";
import { APP_FACEBOOK_ID } from "../../constants/Config";
import ReactHtmlParser from "react-html-parser";
class NewsDetail extends Component {
  state = {
    loading: true,
    news_detail: {},
    getPathname: "",
  };
  getIdNews = (pathname) => {
    if (isEmpty(pathname)) return;
    var getFirstIndexOfId = pathname.lastIndexOf("/") + 1;
    var getLastIndexOfId = pathname.indexOf("-");
    var news_id = pathname.substring(getFirstIndexOfId, getLastIndexOfId);
    return news_id;
  };
  async componentDidMount() {
    var getPathname = this.props.history.location.pathname;
    var news_id = this.getIdNews(getPathname);
    await this.props.getNewsDetail(news_id).catch((err) => {
      this.props.history.push("/404NotFound");
    });
    await new Promise((r) => setTimeout(r, 100));
    this.setState({
      loading: false,
      news_detail: this.props.news_detail,
      getPathname: getPathname,
    });
  }
  static getDerivedStateFromProps(props, prevState) {
    if (
      props.history.location.pathname !== prevState.getPathname &&
      props.news_detail !== prevState.news_detail
    ) {
      return {
        loading: true,
        news_detail: props.news_detail,
        getPathname: props.history.location.pathname,
      };
    }
    return null;
  }
  async componentDidUpdate(prevProps) {
    const { news_detail } = this.props;
    if (prevProps.news_detail !== news_detail) {
      //kiem tra prevProps !== this.props(this.props sau khi da update)
      if (news_detail) {
        await new Promise((r) => setTimeout(r, 100));
        this.setState({
          loading: false,
        });
      }
    }
  }
  render() {
    var { loading, news_detail } = this.state;
    var {
      categories,
      tags,
      user,
      images,
      content_image_dectect,
      content,
      news_src,
      html_content,
    } = news_detail;
    if (categories) {
      categories.sort(function (a, b) {
        return a.parent_cate - b.parent_cate;
      });
      var list_cate_breadcrumb = categories.map((category, index) => {
        return (
          <Link
            className="breadcrumb-item f1-m-3 cl9"
            to={{
              pathname: `/categories/${category.slug}`,
              state: {
                category: category,
              },
            }}
            key={index}
          >
            {category.name}
          </Link>
        );
      });
    }
    if (tags) {
      var list_tag = tags.map((tag, index) => {
        return <Tag key={index} tag={tag} />;
      });
    }
    if (!isEmpty(news_detail) && content_image_dectect && images && content) {
      var detect_array = content_image_dectect.split(" ");
      var content_array = content.split("</p>").filter((item) => {
        return !isEmpty(item);
      });
      content_array = content_array.map((item) => {
        return item.replaceAll("<p>", "");
      });
      var line_length = 0;
      var image_length = 0;
      var body_news;
      body_news = detect_array.map((value, index) => {
        var check = parseInt(value);
        if (check === 1) {
          return <EveryImage key={index} image={images[image_length++]} />;
        }
        return <EveryLine key={index} line={content_array[line_length++]} />;
      });
    } else if (!isEmpty(news_detail) && !isEmpty(html_content)) {
      var body_arr = html_content.split("</p>");
      body_arr = body_arr.map((e) => {
        e += "</p>";
        e = e.replace("<p>", `<p class="f1-s-11 cl6 p-b-25">`);
        e = e.replace(
          "<figcaption>",
          `<figcaption style={{textAlign: "center"}}>`
        );
        e = e.replace(
          `<figure class="image">`,
          `<div className="wrap-pic-max-w p-b-30 author-create"><figure>`
        );
        e = e.replace("</figure>", `</figure></div>`);
        e = e.replaceAll("<img ", `<img width="100%"`);
        return e;
      });
      body_news = ReactHtmlParser(join(body_arr, " "));
    }
    if (isEmpty(user)) {
      var author = news_src ? news_src : "Lê Hoàng Tú";
    } else {
      author = user.name;
    }
    return (
      <>
        {loading ? (
          <Puff color="#00BFFF" height="150" width="100%" />
        ) : (
          <div>
            {/* Breadcumber */}
            <div className="container">
              <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                  <Link to="/" className="breadcrumb-item f1-m-3 cl9">
                    Trang chủ
                  </Link>
                  {list_cate_breadcrumb}
                </div>
              </div>
            </div>
            {/* News Content */}
            <section className="bg0 p-b-140 p-t-10">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 p-b-30">
                    <div className="p-r-10 p-r-0-sr991">
                      {/* Blog Detail */}
                      <div className="p-b-70">
                        <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                          {news_detail.title}
                        </h3>
                        <div className="flex-wr-s-s p-b-40">
                          <span className="f1-s-3 cl8 m-r-15">
                            <a
                              href={
                                news_src ? "http://" + news_detail.news_src : ""
                              }
                              className="f1-s-4 cl8 hov-cl10 trans-03"
                            >
                              {"Viết bởi " + author}
                            </a>
                            <span className="m-rl-3">-</span>
                            <span>{news_detail.date_publish}</span>
                          </span>
                          <span className="f1-s-3 cl8 m-r-15">
                            {"Lượt xem: " + news_detail.view_count}
                          </span>
                        </div>
                        <h3 className="f1-m-3 cl3 mb-4 respon2">
                          <b>{news_detail.summary}</b>
                        </h3>
                        <div>{body_news}</div>
                        {/* Tag */}
                        <div className="flex-s-s p-t-12 p-b-15">
                          <span className="f1-s-12 cl5 m-r-8">Nhãn:</span>
                          <div className="flex-wr-s-s size-w-0">{list_tag}</div>
                        </div>
                        {/* Share */}
                        <div className="flex-s-s">
                          <span className="f1-s-12 cl5 p-t-1 m-r-15">
                            Chia sẻ:
                          </span>
                          <div className="flex-wr-s-s size-w-0">
                            <span
                              href="#"
                              className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                            >
                              <i className="fab fa-facebook-f m-r-7" />
                              <FacebookProvider appId={APP_FACEBOOK_ID}>
                                <Share
                                  href={window.location.href}
                                >
                                  {({ handleClick, loading }) => (
                                    <button
                                      type="button"
                                      disabled={loading}
                                      onClick={handleClick}
                                      className="cl0"
                                    >
                                      Facebook
                                    </button>
                                  )}
                                </Share>
                              </FacebookProvider>
                            </span>
                            <a
                              href="#"
                              className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                            >
                              <i className="fab fa-google-plus-g m-r-7" />
                              Google+
                            </a>
                            {/* <a
                              href="#"
                              className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                            >
                              <i className="fab fa-twitter m-r-7" />
                              Twitter
                            </a>

                            <a
                              href="#"
                              className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                            >
                              <i className="fab fa-pinterest-p m-r-7" />
                              Pinterest
                            </a> */}
                          </div>
                        </div>
                      </div>
                      {/* Leave a comment */}
                      <div>
                        <h4 className="f1-l-4 cl3 p-b-12">Để lại bình luận</h4>
                        <FacebookProvider appId={APP_FACEBOOK_ID}>
                          <Comments
                            href={window.location.href}
                            numPosts={5}
                            colorScheme={"dark"}
                          />
                        </FacebookProvider>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar */}
                  <div className="col-md-10 col-lg-4 p-b-30">
                    <div className="p-l-10 p-rl-0-sr991 p-t-70">
                      {/* Popular Posts */}
                      {/* <MostPopularNews /> */}
                      {/* Category */}
                      {/* <div className="p-b-60">
                        <div className="how2 how2-cl4 flex-s-c">
                          <h3 className="f1-m-2 cl3 tab01-title">{"Bài viết liên quan"}</h3>
                        </div>
                        <ul className="p-t-35">                        
                        </ul>
                      </div> */}
                      {/* Archive */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category_show_news: state.category_show_news,
    hot_news_in_week: state.hot_news_in_week,
    news_detail: state.news_detail,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getNewsDetail: (news_id) => {
      return dispatch(getNewsDetailRequest(news_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
