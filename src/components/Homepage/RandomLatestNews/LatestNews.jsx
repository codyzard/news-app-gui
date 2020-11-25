import React, { Component } from "react";
import NewsItemLatest from "./NewsItemLatest";
import Tagging from "../Tagging";
import { randomLatestNewsRequest} from "../../../actions/index";
import { connect } from "react-redux";
import { Puff } from "@agney/react-loading";
class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    await this.props.randomLatestNews();
    this.setState({
      loading: false
    })
  }
  render() {
    var title = "Tin mới ngẫu nhiên";
    var { random_latest_news, tags } = this.props;
    var { loading } = this.state;
    var list_random_latest_news = random_latest_news.map((n, index) => {
      return <NewsItemLatest key={index} news={n} />;
    });
    return (
      <>
        {loading ? (
         <Puff color="#00BFFF" height="200" width="100%" />
        ) : (
          <section className="bg0 p-t-60 p-b-35">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 p-b-20">
                  <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                    <h3 className="f1-m-2 cl3 tab01-title">{title}</h3>
                  </div>
                  <div className="row p-t-35">{list_random_latest_news}</div>
                </div>
                <div className="col-md-10 col-lg-4">
                  <div className="p-l-10 p-rl-0-sr991 p-b-20">
                    <Tagging tags={tags}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    random_latest_news: state.random_latest_news,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    randomLatestNews: () => {
      return dispatch(randomLatestNewsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LatestNews);
