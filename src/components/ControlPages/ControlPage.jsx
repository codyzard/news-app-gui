import React, { Component } from "react";
import MostPopularNews from "../CategoryPages/MostPopularNews";
import NewsItem from "../CategoryPages/NewsItem";
import {
  hotNewsInWeekRequest,
  getTagWithNewsRequest,
  getTagWithNewsNextPageRequest,
  getNewsBySearchRequest,
  getNewsBySearchNextPageRequest,
} from "../../actions/index";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { scrollOnTopListControlPage } from "../../utils/helper_func";
import { Puff } from "@agney/react-loading";
import Tagging from "../Homepage/Tagging";
class ControlPage extends Component {
  state = {
    tag: null,
    data: {},
    loading: true,
    search: "",
    getPathname: "",
  };
  getControl = (pathname) => {
    if (isEmpty(pathname)) return null;
    if (pathname.includes("tags")) {
      var getFirstIndexOfId = pathname.lastIndexOf("/") + 1;
      var getLastIndexOfId = pathname.indexOf("-");
      var tag_id = pathname.substring(getFirstIndexOfId, getLastIndexOfId);
      return tag_id;
    } else if (pathname.includes("search")) {
      var getLastIndexOfKeyword = pathname.lastIndexOf("/") + 1;
      var keyword = pathname.substr(getLastIndexOfKeyword);
      return keyword;
    }
  };
  initData = async () => {
    var { tag, search } = this.props.location.state;
    if (tag) {
      await this.props.getTagWithNews(tag.id);
      await new Promise((r) => setTimeout(r, 100));
      this.setState({
        tag: tag,
        data: this.props.tag_show_news,
        loading: false,
      });
    } else if (search) {
      await this.props.getNewsBySearch(search);
      await new Promise(() => setTimeout("", 100));
      this.setState({
        search: search,
        data: this.props.search_show_news,
        loading: false,
      });
    }
    if (isEmpty(this.props.hot_news_in_week)) {
      this.props.hotNewsInWeek();
    }
  };
  async componentDidMount() {
    this.initData();
    window.addEventListener("popstate", this.onBackButtonEvent);
  }
  onBackButtonEvent = () => {
    this.initData();
  };
  getNewsNextPage = async (type, pageNumber) => {
    var { tag, search } = this.props.location.state;
    if (tag) {
      await this.props.getTagWithNewsNextPage(type, pageNumber);
      this.setState({
        tag: tag,
        search: "",
        data: this.props.tag_show_news,
      });
    } else if (search) {
      console.log(pageNumber)
      await this.props.getNewsBySearchNextPage(type, pageNumber);
      this.setState({
        tag: search,
        tag: null,
        data: this.props.search_show_news,
      });
    }
  };
  static getDerivedStateFromProps(props, prevState) {
    var { pathname } = props.history.location;
    var { tag_show_news, search_show_news } = props;
    if (pathname !== prevState.getPathname) {
      if (tag_show_news !== prevState.data && pathname.includes("tags")) {
        return {
          loading: true,
          data: tag_show_news,
          getPathname: pathname,
        };
      } else if (
        search_show_news !== prevState.data &&
        pathname.includes("search")
      ) {
        return {
          loading: true,
          data: search_show_news,
          getPathname: pathname,
        };
      }
    }
    return null;
  }
  async componentDidUpdate(prevProps) {
    const { tag_show_news, search_show_news } = this.props;
    if (
      prevProps.tag_show_news !== tag_show_news ||
      prevProps.search_show_news !== search_show_news
    ) {
      await new Promise((r) => setTimeout(r, 100));
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    var { tag, search } = this.props.location.state;
    var { tag_show_news, search_show_news, hot_news_in_week } = this.props;
    var { data, current_page, per_page, total } = !isEmpty(tag_show_news)
      ? tag_show_news
      : search_show_news;
    var { loading } = this.state;
    if (!isEmpty(data)) {
      var list_news = data.map((news, index) => {
        return <NewsItem key={index} news={news} />;
      });
    }
    var title_control = tag ? "tag: " + tag.name : "từ khóa: " + search;
    return (
      <>
        {loading ? (
          <Puff color="#00BFFF" height="150" width="100%" />
        ) : (
          <div>
            {/* Page heading */}
            <div className="container p-t-4 p-b-40">
              <h2 className="f1-l-1 cl2 ml-1">
                {"Tìm kiếm theo " + title_control}
              </h2>
            </div>
            <br />
            {/* Breadcrumb*/}
            <div className="container" id="bread-control-page">
              <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                  <Link to="/" className="breadcrumb-item f1-m-3 cl9">
                    Trang chủ
                  </Link>
                  <span className="breadcrumb-item f1-m-3 cl9">
                    {tag ? tag.name : search}
                  </span>
                </div>
              </div>
            </div>
            {/* List News */}
            <section className="bg0 p-b-55">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 p-b-80">
                    <div
                      className="p-r-10 p-r-0-sr991"
                      id="listnews-controlpage"
                    >
                      <div className="mt-40 pb-40">
                        <span id="checkpoint_news"></span>
                        {list_news}
                      </div>
                      <div className="flex-wr-s-c m-rl--7 p-t-15">
                        <div
                          onClick={(e) => {
                            scrollOnTopListControlPage(e);
                          }}
                          href="#listnews-controlpage"
                        >
                          {tag ? (
                            <Pagination
                              activePage={current_page}
                              totalItemsCount={total}
                              itemsCountPerPage={per_page}
                              onChange={(pageNumber) =>
                                this.getNewsNextPage(tag.id, pageNumber)
                              }
                              itemClass="page-item"
                              linkClass="page-link"
                              firstPageText={"Đầu"}
                              lastPageText={"Cuối"}
                            />
                          ) : (
                            <Pagination
                              activePage={current_page}
                              totalItemsCount={total}
                              itemsCountPerPage={per_page}
                              onChange={(pageNumber) =>
                                this.getNewsNextPage(search, pageNumber)
                              }
                              itemClass="page-item"
                              linkClass="page-link"
                              firstPageText={"Đầu"}
                              lastPageText={"Cuối"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-4 p-b-80">
                    <div className="p-l-10 p-rl-0-sr991">
                      {/* Most Popular */}
                      <MostPopularNews hot_news={hot_news_in_week} />
                      {/* Tag */}
                      <div>
                        <Tagging />
                      </div>
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
    tag_show_news: state.tag_show_news,
    hot_news_in_week: state.hot_news_in_week,
    search_show_news: state.search_show_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getTagWithNews: (tag_id) => {
      return dispatch(getTagWithNewsRequest(tag_id));
    },
    getTagWithNewsNextPage: (tag_id, pageNumber) => {
      return dispatch(getTagWithNewsNextPageRequest(tag_id, pageNumber));
    },
    hotNewsInWeek: () => {
      return dispatch(hotNewsInWeekRequest());
    },
    getNewsBySearch: (keyword) => {
      return dispatch(getNewsBySearchRequest(keyword));
    },
    getNewsBySearchNextPage: (keyword, pageNumber) => {
      return dispatch(getNewsBySearchNextPageRequest(keyword, pageNumber))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPage);
