import { isEmpty } from "lodash";
import React, { Component } from "react";

class EveryLine extends Component {
  render() {
    var { line } = this.props;
    return !isEmpty(line) ? <p className="f1-s-11 cl6 p-b-25">{line}</p> : "";
  }
}

export default EveryLine;
