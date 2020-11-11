import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsDetailRequest } from "../../../actions/index";
class LastesNews_Category extends Component {
  getNewsDetail = async (news_id) => {
    if (this.props.news_detail !== {}) {
      await this.props.getNewsDetail(news_id);
    }
  };
  render() {
    var { news } = this.props;
    return (
      <div className="col-3">
        {/* Item post */}
        <div>
          <Link
            to={"/news/" + news.id + "-" + news.slug}
            className="wrap-pic-w hov1 trans-03"
            onClick={() => this.getNewsDetail(news.id)}
          >
            <img src={news.title_img} alt="IMG" />
          </Link>
          <div className="p-t-10">
            <h5 className="p-b-5">
              <Link
                to={"/news/" + news.id + "-" + news.slug}
                className="f1-s-5 cl3 hov-cl10 trans-03"
                onClick={() => this.getNewsDetail(news.id)}
              >
                {news.title}
              </Link>
            </h5>
            <span className="cl8">
              <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                {"Lượt xem:" + news.view_count}
              </a>
              <span className="f1-s-3 m-rl-3">-</span>
              <span className="f1-s-3">{news.date_publish}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LastesNews_Category);
