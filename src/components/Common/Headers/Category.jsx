import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LastesNews_Category from "./LatestNews_Category";
import { getMenuCateLatestNewsRequest, getCategoryWithNewsRequest } from "./../../../actions/index";
import {scrollOnTopFeatureNews} from './../../../utils/helper_func'
class Category extends Component {
  getNewsBaseInCategory = async (category_id)=> {
    await this.props.getCategoryWithNews(category_id);
  }
  render() {
    var { childCate, category } = this.props;
    var childCateList = childCate.map((child, index) => {
      return (
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          data-toggle="pill"
          href={"#news-" + child.name.replaceAll(" ", "") + "-" + index}
          role="tab"
          key={index}
          onClick={(e) => {scrollOnTopFeatureNews(e)}}
        >
          <Link
            to={{
              pathname: `/categories/${child.slug}`,
              state: {
                category: child,
              },
            }}
            style={{ color: "inherit" }}
            onClick={() => {this.getNewsBaseInCategory(child.id)}}
          >
            <div>{child.name}</div>
          </Link>
        </a>
      );
    });
    var tabPanel = childCate.map((child, index) => {
      var tab_news = childCate[index].cate_news.map((news, index) => {
        return <LastesNews_Category key={index} news={news} />;
      });
      return (
        <div
          className={index === 0 ? "tab-pane show active" : "tab-pane show"}
          id={"news-" + child.name.replaceAll(" ", "") + "-" + index}
          role="tabpanel"
          key={index}
        >
          <div className="row">{tab_news}</div>
        </div>
      );
    });
    return (
      <li className="mega-menu-item" onClick={(e) => scrollOnTopFeatureNews(e)}>
        <Link
          to={{
            pathname: `/categories/${category.slug}`,
            state: {
              category: category,
            },
          }}
          onClick={() => {this.getNewsBaseInCategory(category.id)}}
        >
          {category.name}
        </Link>
        <div className="sub-mega-menu">
          <div className="nav flex-column nav-pills" role="tablist">
            {childCateList}
          </div>
          <div className="tab-content">{tabPanel}</div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    header_cate_news: state.header_cate_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMenuCateLatestNews: (category_name) => {
      return dispatch(getMenuCateLatestNewsRequest(category_name));
    },
    getCategoryWithNews: (category_id) => {
      return dispatch(getCategoryWithNewsRequest(category_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
