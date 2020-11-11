import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getRandomTagsRequest,
  getTagWithNewsRequest,
  clearSearchWithNews,
} from "./../../actions/index";
import { scrollOnTopListControlPage } from "../../utils/helper_func";
class Tagging extends Component {
  async componentDidMount() {
    await this.props.getRandomTags();
  }
  getNewsBaseTag = async (tag_id) => {
    if (this.props.news_detail !== {}) {
      await this.props.getTagWithNews(tag_id);
      this.props.clearSearchWithNews();
    }
  };
  render() {
    var { tags } = this.props;
    if (tags) {
      var list_tag = tags.map((tag, index) => {
        return (
          <Link
            key={index}
            to={{
              pathname: `/control/tags/${tag.id + "-" + tag.slug}`,
              state: {
                tag: tag,
              },
            }}
            className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
            onClick={(e) => {
              this.getNewsBaseTag(tag.id);
              scrollOnTopListControlPage(e);
            }}
          >
            {tag.name}
          </Link>
        );
      });
    }
    return (
      <div className="p-b-55">
        <div className="how2 how2-cl4 flex-s-c m-b-30">
          <h3 className="f1-m-2 cl3 tab01-title">Tags</h3>
        </div>
        <div className="flex-wr-s-s m-rl--5">{list_tag}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    tag_show_news: state.tag_show_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getRandomTags: () => {
      return dispatch(getRandomTagsRequest());
    },
    getTagWithNews: (tag_id) => {
      return dispatch(getTagWithNewsRequest(tag_id));
    },
    clearSearchWithNews: () => {
      return dispatch(clearSearchWithNews());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tagging);
