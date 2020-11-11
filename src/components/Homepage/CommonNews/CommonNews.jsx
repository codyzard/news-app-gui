import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryLatestNews from "./CategoryLatestNews";
import MostPopular from "./MostPopular";
import { getInitCateNewNewsRequest } from "./../../../actions/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "@agney/react-loading";
class CommonNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    await this.props.getInitCateNewNews();
    await new Promise((r) => setTimeout(r, 100));
    this.setState({
      loading: false,
    });
  }
  render() {
    var { categories } = this.props;
    var { loading } = this.state;
    var categoryList = categories.map((c, index) => {
      return (
        <CategoryLatestNews key={index} category={c} childCate={c.sub_cate} />
      );
    });
    return (
      <>
        {loading ? (
          <Puff
            width="100"
            style={{ marginLeft: "50%" }}
            color="#00BFFF"
            height={80}
            width={80}
          />
        ) : (
          <section className="bg0 p-t-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="p-b-20">
                    {/* Latest News follow Category  */}
                    {categoryList}
                  </div>
                </div>
                {/* Most Popular */}
                {<MostPopular />}
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
    categories: state.categories,
    cate_news: state.cate_news,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getInitCateNewNews: () => {
      return dispatch(getInitCateNewNewsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommonNews);
