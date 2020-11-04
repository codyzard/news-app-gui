import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCateNewNewsRequest,
  getCategoryWithNewsRequest,
} from "../../../actions/index";
import LatestNewsItem from "./LatestNewsItem";
import TabPanelCateNews from "./TabPanelCateNews";
class CategoryLatestNews extends Component {
  constructor(props) {
    super(props);
  }
  loadDataFollowSubCate = async (category_name) => {
    await this.props.getCateNewNews(category_name);
  };
  getNewsBaseInCategory = async (category_id)=> {
    await this.props.getCategoryWithNews(category_id);
  }
  render() {
    var { category, childCate} = this.props;
    var navSubCate = childCate.map((subcate, index) => {
      if (index >= 4) return;
      return (
        <li className="nav-item" key={index}>
          <a
            className={index === 0 ? "nav-link active" : "nav-link"}
            data-toggle="tab"
            href={"#tab"+category.name.replaceAll(' ','')+index}
            role="tab"
            onClick={() => this.loadDataFollowSubCate(subcate.name)}
          >
            {subcate.name}
          </a>
        </li>
      );
    });
    var restSubcate = childCate.map((subcate, index) => {
      if (index < 4) return;
      return (
        <li className="nav-item" key={index}>
          <a
            className="dropdown-item "
            data-toggle="tab"
            href={"#tab"+category.name.replaceAll(' ','')+index}
            role="tab"
            onClick={() => this.loadDataFollowSubCate(subcate.name)}
          >
            {subcate.name}
          </a>
        </li>
      );
    });
    var check = restSubcate.every((value) => {
      return value === undefined;
    });
    var subcate_res_tabPanel = childCate.map((subcate, index) => {
      return (
        <TabPanelCateNews parent_cate={category} news={subcate.cate_news} category={subcate} key={index} index={index}/>
      )
    });
    return (
      <div className="tab01 p-b-20">
        <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
          {/* Brand tab */}
          <h3 className="f1-m-2 cl12 tab01-title">{category.name}</h3>
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            {/* Cho nay se se lam tab map toi id pannel o duoi */}
            {navSubCate}
            <div className="dropdown">
              <li id="dropdownMenuButton" data-toggle="dropdown">
                {!check ? "Xem thêm >>" : ""}
              </li>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {restSubcate}
              </div>
            </div>
            <li className="nav-item-more dropdown dis-none">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <i className="fa fa-ellipsis-h" />
              </a>
              <ul className="dropdown-menu"></ul>
            </li>
            {/* Cho nay se se lam tab map toi id pannel o duoi */}
          </ul>
          {/*  */}
          <Link
            to={{
              pathname: "/categories/"+category.slug,
              state: {
                category: category,
              }
            }}
            className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
            onClick={() => {this.getNewsBaseInCategory(category.id)}}
          >
            {"Xem toàn bộ"}
            <i className="fs-12 m-l-5 fa fa-caret-right" />
          </Link>
        </div>
        {/* Tab panes */}
        <div className="tab-content p-t-35">
          {subcate_res_tabPanel}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getCateNewNews: (category_name) => {
      return dispatch(getCateNewNewsRequest(category_name));
    },
    getCategoryWithNews: (category_id) => {
      return dispatch(getCategoryWithNewsRequest(category_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryLatestNews);
