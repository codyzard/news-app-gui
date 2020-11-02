import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryLatestNews from "./CategoryLatestNews";
import MostPopular from "./MostPopular";
import {getInitCateNewNewsRequest} from "./../../../actions/index"
class CommonNews extends Component { 
  async componentDidMount() {
    await this.props.getInitCateNewNews();
  }
  render() {
    var {categories, cate_news} = this.props;
    var mainCate = Object.keys(categories);
    var subCate = Object.values(categories);
    var categoryList = mainCate.map((c, index) => {
      return <CategoryLatestNews key={index} category={c} childCate={subCate[index]} cate_for_news={cate_news[index]} />;
    });
    return (
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
            <MostPopular/>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories,
    cate_news: state.cate_news,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getInitCateNewNews: () => {
      return dispatch(getInitCateNewNewsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommonNews);
