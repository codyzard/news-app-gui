import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BackToTop from "../Common/Controls/BackToTop";
import Headline from "../Common/Controls/Headline";
import Footer from "../Common/Footers/Footer";
import Header from "../Common/Headers/Header";
import ModalVideo from "../Common/Modals/ModalVideo";
import Homepage from "./../Homepage/Homepage";
import CategoryPage from "./../CategoryPages/CategoryPage";
import NewsDetail from "../NewsPages/NewsDetail";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props){
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
          <Route path="/newsdetail">
            <NewsDetail />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
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

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}
export default connect(mapStateToProps, null)(Main);
