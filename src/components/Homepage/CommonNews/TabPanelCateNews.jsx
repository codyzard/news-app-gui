import React, { Component } from "react";
import ItemPost from "./ItemPost";
import BigItemPost from "./BigItemPost";

class TabPanelCateNews extends Component {
  render() {
    var { index, parent_cate, news } = this.props;
    if(news){
      var big_item_post = news.map((n, index) => {
        if (index !== 0) return;
        return <BigItemPost news={n} index={index} key={index} />;
      });
      var list_item_post = news.map((n, index) => {
        if (index === 0) return;
        return <ItemPost news={n} key={index} index={index} />;
      });
    }
    return (
      <div
        className={
          index === 0 ? "tab-pane fade show active" : "tab-pane fade show"
        }
        id={"tab" + parent_cate.replaceAll(' ','') + index}
        role="tabpanel"
      >
        <div className="row">
          <div className="col-sm-6 p-r-25 p-r-15-sr991">{big_item_post}</div>
          <div className="col-sm-6 p-r-25 p-r-15-sr991">
              {/* Item post */}
            {list_item_post}
          </div>
        </div>
      </div>
    );
  }
}

export default TabPanelCateNews;
