import React, { Component } from 'react'
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

class Header extends Component {
  render() {
    return (
      <header>
        <MobileHeader/>
        <DesktopHeader/>
      </header>
    );
  }
}

export default Header;
