import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404" />
          <h1>{"404"}</h1>
          <h2>{"Sax! Trang không tồn tại"}</h2>
          <p className="mt-2 mb-2">
            {"Xin lỗi trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa hoặc đã bị đổi tên :<"}
          </p>
          <Link class="btn btn-warning mt-3 mb-3" to="/">{"Về trang chủ"}</Link>
        </div>
      </div>
    );
  }
}

export default Page404;
