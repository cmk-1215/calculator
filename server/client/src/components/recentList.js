import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRecentEquations } from "../actions/index";
import _ from "lodash";
import "../styles/recentList.css"





class recentList extends Component {

  componentDidMount() {
    this.props.getRecentEquations();
  }

//return a list of the 10 most recent equations
  renderList(){
      console.log(this.props)
      return _.map(this.props.recentList, equation => {
          return (
            <li key={equation._id}>
            {equation.problem}
            </li>
          )

      })
  }

  render() {
    return (
      <div className="recent-container">
          <div className="recent-list">
          <h2>Most Recent equations:</h2>
            <ul>
                {this.renderList()}
            </ul>
          </div>
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