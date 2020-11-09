import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRecentEquations } from "../actions/index";
import _ from "lodash";





class recentList extends Component {

  componentDidMount() {
    this.props.getRecentEquations();
  }


  renderList(){
      return _.map(this.props.recentList, equation => {
          return (
            <li>
            {equation.problem}
            </li>
          )

      })
  }

  render() {
      console.log(this.props)
    
    return (
        
      <div>
          <p>Most Recent equations:</p>
          <ul>
              {this.renderList()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recentList: state.recentList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecentEquations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(recentList);