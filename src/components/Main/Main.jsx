import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import BackToTop from "../Common/Controls/BackToTop";
import Headline from "../Common/Controls/Headline";
import Footer from "../Common/Footers/Footer";
import Header from "../Common/Headers/Header";
import ModalVideo from "../Common/Modals/ModalVideo";
import Homepage from "./../Homepage/Homepage";
import CategoryPage from "./../CategoryPages/CategoryPage";
import NewsDetail from "../NewsPages/NewsDetail";
import { connect } from "react-redux";
import ControlPage from "../ControlPages/ControlPage";
import Page404 from "./Page404";
import MainAdmin from "../Admin/MainAdmin";
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* HEADER */}
        <Header />
        {/* Headline */}
        <Headline />
        {/* Homepage */}
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/news/:slug" component={NewsDetail}></Route>
          <Route path="/categories/:slug" component={CategoryPage}></Route>
          <Route path="/control/:slug" component={ControlPage}></Route>
          <Route component={Page404}></Route>
          <Switch>
          <Route path="/admin" component={MainAdmin}/>
          </Switch>
        </Switch>
        {/* Footer */}
        <Footer />
        {/* Back to top */}
        <BackToTop />
        {/* Modal Video 01*/}
        <ModalVideo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
export default connect(mapStateToProps, null)(Main);
