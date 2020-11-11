import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getTagWithNewsRequest} from '../../actions/index';
import { scrollOnTopListControlPage } from "../../utils/helper_func";
class Tag extends Component {
  getNewsBaseTag = async (tag_id) => {
    if (this.props.news_detail !== {}) {
      await this.props.getTagWithNews(tag_id);
    }
  };
  render() {
    var { tag } = this.props;
    return (
      <Link
        to={{
          pathname: `/control/tags/${tag.id + "-" + tag.slug}`,
          state: {
            tag: tag,
          },
        }}
        className="f1-s-12 cl8 hov-link1 m-r-15"
        onClick={(e) => {this.getNewsBaseTag(tag.id); scrollOnTopListControlPage(e)}}
      >
        <b>{tag.name}</b>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tag_show_news: state.tag_show_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getTagWithNews: (tag_id) => {
      return dispatch(getTagWithNewsRequest(tag_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
