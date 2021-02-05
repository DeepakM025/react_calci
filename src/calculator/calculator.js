import React, { Component } from "react";
import "../calculator/calculator.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayVal: 0,
      operation: null,
      currentOut: 0,
      operationflag: false,
      seriesflag: false,
      scmode: false,
      lightMode: true
    };
    this.clickVal = this.clickVal.bind(this);
    this.clearall = this.clearall.bind(this);
    this.clickOperation = this.clickOperation.bind(this);
    this.clickOutput = this.clickOutput.bind(this);
    this.toggleScmode = this.toggleScmode.bind(this);
    this.toggleMinus = this.toggleMinus.bind(this);
    this.squareNum = this.squareNum.bind(this);
    this.squareRoot = this.squareRoot.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }
  clickVal(e) {
    if (this.state.displayVal > 0) {
      if (!this.state.operationflag) {
        this.setState({
          displayVal: this.state.displayVal + e.target.innerHTML,
        });
      } else {
        this.setState({
          displayVal: e.target.innerHTML,
          operationflag: !this.state.operationflag,
        });
      }
    } else {
      this.setState({
        displayVal: e.target.innerHTML,
      });
    }
  }
  clearall() {
    this.setState({
      displayVal: 0,
      currentOut: 0,
    });
  }
  clickOperation(e) {
    if (this.state.seriesflag) {
      this.clickOutput();
      setTimeout(() => {
        this.setState({
          currentOut: this.state.displayVal,
          operation: e.target.innerHTML,
          operationflag: true,
        });
      }, 100);
    } else {
      this.setState({
        operation: e.target.innerHTML,
        operationflag: true,
        currentOut: this.state.displayVal,
        seriesflag: true,
      });
    }
  }
  clickOutput() {
    if (
      this.state.displayVal &&
      this.state.operation &&
      this.state.currentOut
    ) {
      if (this.state.operation === "+") {
        this.setState({
          displayVal:
            parseInt(this.state.currentOut) + parseInt(this.state.displayVal),
          operation: null,
        });
      } else if (this.state.operation === "-") {
        this.setState({
          displayVal:
            parseInt(this.state.currentOut) - parseInt(this.state.displayVal),
          operation: null,
        });
      } else if (this.state.operation === "x") {
        this.setState({
          displayVal:
            parseInt(this.state.currentOut) * parseInt(this.state.displayVal),
          operation: null,
        });
      } else if (this.state.operation === "/") {
        this.setState({
          displayVal:
            parseInt(this.state.currentOut) / parseInt(this.state.displayVal),
          operation: null,
        });
      }
    }
  }
  toggleScmode() {
    this.setState({
      scmode: !this.state.scmode,
    });
  }
  toggleMinus() {
    if (this.state.displayVal > 0) {
      let dispvalX = this.state.displayVal
      this.setState({
        displayVal: (dispvalX *= -1),
      });
    } else {
      this.setState({
        displayVal: Math.abs(this.state.displayVal),
      });
    }
  }
  squareNum() {
    this.setState({
      displayVal:
        parseInt(this.state.displayVal) * parseInt(this.state.displayVal),
    });
  }
  squareRoot() {
    this.setState({
      displayVal: Math.sqrt(this.state.displayVal),
    });
  }
  toggleMode(){
    this.setState({
      lightMode: !this.state.lightMode
    })
  }
  render() {
    return (
      <div className="col-md-4 mx-auto py-5">
        <div className="row p-3">
          <button className="scmode" onClick={this.toggleScmode}>scientific</button>
          <div className="togglemode ml-auto">
            <button onClick={this.toggleMode} className= {this.state.lightMode ? "active" : ""}>Light</button>
            <button onClick={this.toggleMode} className= {this.state.lightMode ? "" : "active"}>Dark</button>
          </div>
        </div>

        <div className={this.state.lightMode ? "calci_wrap" : "calci_wrap dark"}>
          <div className="calci_display">
            <div className="text-right">{this.state.displayVal}</div>
          </div>
          <div className="calci_row">
            <div className="calci_btn">
              <button onClick={this.clickVal}>1</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>2</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>3</button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.clickOperation}>+</button>
            </div>
          </div>
          <div className="calci_row">
            <div className="calci_btn">
              <button onClick={this.clickVal}>4</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>5</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>6</button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.clickOperation}>-</button>
            </div>
          </div>
          <div className="calci_row">
            <div className="calci_btn">
              <button onClick={this.clickVal}>7</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>8</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>9</button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.clickOperation}>x</button>
            </div>
          </div>
          <div className="calci_row">
            <div className="calci_btn yellowBtn">
              <button onClick={this.clearall}>c</button>
            </div>
            <div className="calci_btn">
              <button onClick={this.clickVal}>0</button>
            </div>
            <div className="calci_btn yellowBtn">
              <button onClick={this.clickOutput}>=</button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.clickOperation}>/</button>
            </div>
          </div>
          <div className={this.state.scmode ? "calci_row " : "calci_row d-none"}>
            <div className="calci_btn operationIcon">
              <button onClick={this.toggleMinus}>+/-</button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.squareNum}>x<sup>2</sup></button>
            </div>
            <div className="calci_btn operationIcon">
              <button onClick={this.squareRoot}>√</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
