import React, { Component } from "react";
import { connect } from "react-redux";
import {hotNewsInWeekRequest} from './../../../actions/index';
import ItemPost from "./ItemPost";
class MostPopular extends Component {
  async componentDidMount(){
    await this.props.hotNewsInWeek();
  }
  render() {
    var title = "Tin nóng trong tuần"
    var {hot_news_in_week} = this.props;
    var list_hot_news = hot_news_in_week.map((hn, index) => {
      return <ItemPost news={hn} key={index} />
    })
    return (
      <div className="col-md-10 col-lg-4">
        <div className="p-l-10 p-rl-0-sr991 p-b-20">
          {/*  */}
          <div>
            <div className="p-b-30">
              <div className="how2 how2-cl4 flex-s-c">
                <h3 className="f1-m-2 cl3 tab01-title">{title}</h3>
              </div>
              <ul className="p-t-35">
                {list_hot_news}
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="flex-c-s p-t-8">
            <a href="#">
              <img
                className="max-w-full"
                src="images/banner-02.jpg"
                alt="IMG"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hot_news_in_week: state.hot_news_in_week,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    hotNewsInWeek: () => {
      return dispatch(hotNewsInWeekRequest());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);


