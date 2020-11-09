import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { addEquation } from "../actions/index";


class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstNumber: "",
        sign: "",
        secondNumber: ""
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
    event.preventDefault();
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
            let equation = `${x} * ${y} = ${answer}`
            addEquation(equation)
            console.log(equation)
            console.log(this.state)
        } else if (this.state.sign === "+"){
            let answer = x + y
            let equation = `${x} + ${y} = ${answer}`
            addEquation(equation)
            console.log(equation)
        } else if (this.state.sign === "-"){
            let answer = x - y
            let equation = `${x} - ${y} = ${answer}`
            addEquation(equation)
            console.log(equation)
        } else if (this.state.sign === "/"){
            let answer = x / y
            let equation = `${x} / ${y} = ${answer}`
            addEquation(equation)
            console.log(equation)
        } else {
            //if the user enteres an incorect operation, an error message appears
            alert("Please enter +, -, *, or / as signs")
        }
    }
  }

render() {
  return (
    <div>
        <p>Calculator</p>
        <Form>
            <Form.Control
                id="form"
                className="file-form tag-input shadow-sm"
                size="md"
                type="text"
                placeholder="first number"
                value={this.state.title}
                onChange={this.updateFirst.bind(this)}
                />

            <Form.Control
                id="form"
                className="file-form tag-input shadow-sm"
                size="md"
                type="text"
                placeholder="Sign"
                value={this.state.title}
                onChange={this.updateSign.bind(this)}
                />

            <Form.Control
                id="form"
                className="file-form tag-input shadow-sm"
                size="md"
                type="text"
                placeholder="Second number"
                value={this.state.title}
                onChange={this.updateSecond.bind(this)}
                />

            <button
                id="submit-btn"
                onClick={this.calculate.bind(this)}
                size="lg"
                type="submit"
                className="file-form btn btn-primary btn-sm">
                Calculate
            </button>
        </Form>
    </div>
    );
  }
};
  
// function mapStateToProps(state) {
//     return { equation:  };
//   }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addEquation }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(Calculator);