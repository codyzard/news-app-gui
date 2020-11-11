import React, { Component } from "react";
import FeatureNewsItem from "./FeatureNewsItem";
import MostPopularNews from "./MostPopularNews";
import NewsItem from "./NewsItem";
import {
  getCategoryWithNewsRequest,
  getCategoryWithNewsNextPageRequest,
  hotNewsInWeekRequest,
} from "../../actions/index";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { scrollOnTopList } from "./../../utils/helper_func";
import { Puff } from "@agney/react-loading";
import Tagging from "../Homepage/Tagging";
class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      data: {},
      loading: true,
    };
  }
  async componentDidMount() {
    var { category } = this.props.location.state;
    if (isEmpty(this.props.category_show_news)) {
      this.props.getCategoryWithNews(category.id);
    }
    if (isEmpty(this.props.hot_news_in_week)) {
      this.props.hotNewsInWeek();
    }
    await new Promise((r) => setTimeout(r, 100));
    this.setState({
      category: category,
      data: this.props.category_show_news,
      loading: false,
    });
  }
  getNewsNextPage = async (category_id, pageNumber) => {
    var { category } = this.props.location.state;
    await this.props.getCategoryWithNewsNextPage(category_id, pageNumber);
    this.setState({
      category: category,
      data: this.props.category_show_news,
    });
  };
  render() {
    var {category} = this.props.location.state;
    var { data, current_page, per_page, total } = this.props.category_show_news;
    var { hot_news_in_week, feature_news_for_cate } = this.props;
    var { loading } = this.state;
    if (!isEmpty(data)) {
      var list_news = data.map((news, index) => {
        return <NewsItem key={index} news={news} />;
      });
    }
    var list_feature_news = feature_news_for_cate.map((news, index) => {
      return <FeatureNewsItem key={index} news={news} />;
    });
    return (
      <>
        {loading ? (
          <Puff color="#00BFFF" height="150" width="100%" />
        ) : (
          <div>
            {/* Page heading */}
            <div className="container p-t-4 p-b-40">
              <h2 className="f1-l-1 cl2 ml-1">{category.name}</h2>
            </div>
            {/* Feature News */}
            <section className="bg0">
              <div className="container">
                <h1 className="f1-l-1 mb-3 ml-1">{"Mới nhất"}</h1>
                <div className="row m-rl--1">{list_feature_news}</div>
              </div>
            </section>
            <br />
            {/* Breadcrumb*/}
            <div className="container">
              <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                  <Link to="/" className="breadcrumb-item f1-m-3 cl9">
                    Trang chủ
                  </Link>
                  <span className="breadcrumb-item f1-m-3 cl9">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
            {/* List News */}
            <section className="bg0 p-b-55">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 p-b-80">
                    <div className="p-r-10 p-r-0-sr991" id="listnews">
                      <h1 className="f1-l-1 mt-2">{"Cũ hơn"}</h1>
                      <div className="mt-40 pb-40">
                        <span id="checkpoint_news"></span>
                        {list_news}
                      </div>
                      <div className="flex-wr-s-c m-rl--7 p-t-15">
                        <div
                          onClick={(e) => {
                            scrollOnTopList(e);
                          }}
                          href="#listnew"
                        >
                          <Pagination
                            activePage={current_page}
                            totalItemsCount={total}
                            itemsCountPerPage={per_page}
                            onChange={(pageNumber) =>
                              this.getNewsNextPage(category.id, pageNumber)
                            }
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText={"Đầu"}
                            lastPageText={"Cuối"}
                          />
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
                        <Tagging/>
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
    category_show_news: state.category_show_news,
    hot_news_in_week: state.hot_news_in_week,
    feature_news_for_cate: state.feature_news_for_cate,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCategoryWithNews: (category_id) => {
      return dispatch(getCategoryWithNewsRequest(category_id));
    },
    getCategoryWithNewsNextPage: (category_id, pageNumber) => {
      return dispatch(
        getCategoryWithNewsNextPageRequest(category_id, pageNumber)
      );
    },
    hotNewsInWeek: () => {
      return dispatch(hotNewsInWeekRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
