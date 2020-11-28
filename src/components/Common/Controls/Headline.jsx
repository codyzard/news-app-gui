import { isEmpty } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {getNewsBySearchRequest, clearTagWithNews} from '../../../actions/index'
class Headline extends Component {
  state = {search: ''}
  loadHotNews = () => {
    var { hot_news_in_week } = this.props;
    if (hot_news_in_week) {
      var list_trending = hot_news_in_week.map((news, index) => {
        return (
          <span className="dis-inline-block slide100-txt-item animated visible-false">
            {news.title}
          </span>
        );
      });
    }
    return list_trending
  };
  onHandleSearch = async (e) => {
    var {search} = this.state;
    if(isEmpty(search)){
      alert("Xin hãy nhập từ khóa");
      return;
    }
    var spilit_keyword = search.replaceAll(' ', '+');
    await this.props.getNewsBySearch(search);
    this.props.history.push('/control/search/'+spilit_keyword,{
      search: search,
    });
  }
  onChangeInput = (e) => {
    var {name, value}  = e.target;
    this.setState({
      [name]: value
    })
  }
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.onHandleSearch(event);
    }
  }
  render() {
    return (
      <div className="container" id="list_feature_news">
        <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
          <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
            <span className="text-uppercase cl2 p-r-8">{"Thịnh hành: "}</span>
            <span
              className="dis-inline-block cl6 slide100-txt pos-relative size-w-0"
              data-in="fadeInDown"
              data-out="fadeOutDown"
            >
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Interest rate angst trips up US equity bull market
              </span>
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Interest rate angst trips up US equity bull market
              </span>
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Designer fashion show kicks off Variety Week
              </span>
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Microsoft quisque at ipsum vel orci eleifend ultrices
              </span>
            </span>
          </div>
          <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
            <input
              className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
              type="text"
              name="search"
              placeholder={"Tìm kiếm"}
              onChange={(e) => this.onChangeInput(e)}
              onKeyPress={(e) => this.handleKeyPress(e)}
            />
            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03" onClick={(e) => this.onHandleSearch(e)}>
              <i className="zmdi zmdi-search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hot_news_in_week: state.hot_news_in_week,
    search_show_news: state.search_show_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getNewsBySearch: (keyword) => {
      return dispatch(getNewsBySearchRequest(keyword));
    },
    clearTagWithNews: () => {
      return dispatch(clearTagWithNews());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Headline));
