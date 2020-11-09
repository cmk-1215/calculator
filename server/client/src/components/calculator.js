import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { addEquation } from "../actions/index";
import { getRecentEquations } from "../actions/index";
import "../styles/calculator.css"




class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstNumber: "",
        sign: "",
        secondNumber: "",
        fullProblem: "",
        solution: ""
    }
  }

  updateFirst(event) {
    this.setState({ firstNumber: event.target.value }, () => {
    });
  }

  updateSign(event) {
    this.setState({ sign: event.target.value }, () => {
    });
  }

  updateSecond(event) {
    this.setState({ secondNumber: event.target.value }, () => {
    });
  }

  calculate(event) {
    // event.preventDefault();
    //Error handeling to make sure that the user enters only numbers and correct signs in the inputs
    if (isNaN(this.state.firstNumber) || isNaN(this.state.secondNumber)) {
        alert("Please only enter integers as the first and second number")
    } else {
        //turn the string into an integer to compute values
        var x = parseInt(this.state.firstNumber, 10) 
        var y = parseInt(this.state.secondNumber, 10) 
        //the following go through all the conditions of the arithemtic operators to compute and answer, and assign the string as "equation"
        if (this.state.sign === "*"){
            let answer = x * y
            // this.setState({solution: answer})
            let equation = `${x} * ${y} = ${answer}`
            // this.setState({fullProblem: equation})
            addEquation(equation)
        } else if (this.state.sign === "+"){
            let answer = x + y
            let equation = `${x} + ${y} = ${answer}`
            addEquation(equation)
        } else if (this.state.sign === "-"){
            let answer = x - y
            let equation = `${x} - ${y} = ${answer}`
            addEquation(equation)
        } else if (this.state.sign === "/"){
            let answer = x / y
            let equation = `${x} / ${y} = ${answer}`
            addEquation(equation)
        } else {
            //if the user enteres an incorect operation, an error message appears
            alert("Please enter +, -, *, or / as signs")
        }
    }
  }

render() {
  return (
    <div className="form-container">
        <div className="row form">
            <div>
            <h1>Calculator App</h1>
            <p>You may use this app to enter simple arithemtic problems and to see the most recent ones logged below. </p>
            <br />
                <Form>
                    <div className="form-row ">
                        <div className="col">
                            <Form.Control
                            
                                id="form first-entry"
                                className="input-group calculator-entry file-form tag-input shadow-sm"
                                size="md"
                                type="text"
                                placeholder="Ex: 2"
                                value={this.state.title}
                                onChange={this.updateFirst.bind(this)}
                                />
                        </div>
                        <div className="col">
                            <Form.Control
                            
                                id="form sign"
                                className="calculator-entry file-form tag-input shadow-sm"
                                size="md"
                                type="text"
                                placeholder="*"
                                value={this.state.title}
                                onChange={this.updateSign.bind(this)}
                                />
                        </div>
                        <div className="col">
                            <Form.Control
                                id="form second-entry"
                                className="calculator-entry file-form tag-input shadow-sm"
                                size="md"
                                type="text"
                                placeholder="4"
                                value={this.state.title}
                                onChange={this.updateSecond.bind(this)}
                                />
                        </div>
                         <div className="col">
                            <button
                                id="submit-btn calc-button"
                                onClick={this.calculate.bind(this)}
                                size="lg"
                                type="submit"
                                className="calculator-entry file-form btn btn-primary btn-sm">
                                Calculate
                            </button>
                            
                        </div>
                    </div>
                </Form>
                <br/>
            </div>
        </div>
    </div>
    );
  }
};
  
// function mapStateToProps(state) {
//     return { equation:  };
//   }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addEquation, getRecentEquations }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(Calculator);