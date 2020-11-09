import React, {Component} from "react";
import { Form } from "react-bootstrap";


class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstNumber: "",
        sign: "",
        secondEntry: ""
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
    //Error handleing to make sure that the user enters only numbers and correct signs in the inputs
    if (isNaN(this.state.firstNumber) || isNaN(this.state.secondNumber)) {
        alert("Please only enter integers in the first and second number")
    } else {
        if (this.state.sign == "*" || this.state.sign == "+" || this.state.sign == "-" || this.state.sign == "/"){
        alert("yay")
        } else {
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
  
  export default (Calculator);