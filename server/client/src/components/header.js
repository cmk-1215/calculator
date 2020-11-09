import React, {Component} from "react";
import "../styles/header.css";



class Header extends Component {


  render() {
    return (
      <div id="header">
          <div style={{ color: '#FFF' }} id="icon">
              CK
          </div>
          <div id="github" >
            <a style={{ color: '#FFF' }} href="https://github.com/cmk-1215/calculator">GitHub</a>
          </div>
          <div id="linkedin">
          <a style={{ color: '#FFF' }} href="https://www.linkedin.com/in/christina-kurpiel-ma-62b5741a4/">LinkedIn</a>
          </div>
      </div>
    );
  }
};


export default Header;