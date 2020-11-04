import React, { Component } from "react";
import ItemPost from "../Homepage/CommonNews/ItemPost";

class MostPopularNews extends Component {
  render() {
    var title = "Tin nóng trong tuần"
    var {hot_news} = this.props;
    var list_hot_news = hot_news.map((news, index) => {
      return <ItemPost news={news} key={index}/>;
    })
    return (
      <div className="p-b-30">
        <div className="how2 how2-cl4 flex-s-c">
          <h3 className="f1-m-2 cl3 tab01-title">{title}</h3>
        </div>
        <ul className="p-t-35">
          {list_hot_news}
        </ul>
      </div>
    );
  }
}

export default MostPopularNews;
