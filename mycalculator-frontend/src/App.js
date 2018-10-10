import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.edit = this.edit.bind(this);
    this.pop = this.pop.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }

  edit(e) {
    this.setState({
      input: this.state.input + e.target.value
    });
    console.log(this.state.input);
  }
  pop() {
    this.setState({
      input: ""
    });
  }

  handleOperator = e => {
    const data = { data1: this.state.input };
    console.log(data);
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/operate", data).then(response => {
      this.setState({
        input: response.data
      });
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col xs={4} sm={4} md={4} lg={4}">
            <h2 className="text-center">Calculator</h2>
          </div>
        </div>
        <hr />
        <div
          className="card card-size mx-auto p-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="card-block">
            <br />
            {this.state.input}

            <hr />
            <div className="btn-toolbar">
              <button
                className="btn btn-light btn-circle btn-cl"
                type="button"
                onClick={() => {
                  this.pop();
                }}
              >
                AC
              </button>
              <button
                className="btn btn-warning btn-circle btn-xl"
                type="button"
                value="/"
                onClick={this.edit}
              >
                /
              </button>
            </div>
            <div className="btn-toolbar">
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={7}
                onClick={this.edit}
              >
                7
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value="8"
                onClick={this.edit}
              >
                8
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={9}
                onClick={this.edit}
              >
                9
              </button>
              <button
                className="btn btn-warning btn-circle btn-xl"
                type="button"
                value="*"
                onClick={this.edit}
              >
                *
              </button>
            </div>
            <div className="btn-toolbar">
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={4}
                onClick={this.edit}
              >
                4
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={5}
                onClick={this.edit}
              >
                5
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={6}
                onClick={this.edit}
              >
                6
              </button>
              <button
                className="btn btn-warning btn-circle btn-xl"
                type="button"
                value="-"
                onClick={this.edit}
              >
                -
              </button>
            </div>
            <div className="btn-toolbar">
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={1}
                onClick={this.edit}
              >
                1
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={2}
                onClick={this.edit}
              >
                2
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value={3}
                onClick={this.edit}
              >
                3
              </button>
              <button
                className="btn btn-warning btn-circle btn-xl"
                type="button"
                value="+"
                onClick={this.edit}
              >
                +
              </button>
            </div>
            <div className="btn-toolbar">
              <button
                className="btn btn-secondary btn-circle btn-z"
                type="button"
                value={0}
                onClick={this.edit}
              >
                0
              </button>
              <button
                className="btn btn-secondary btn-circle btn-xl"
                type="button"
                value="."
                onClick={this.edit}
              >
                .
              </button>
              <button
                className="btn btn-warning btn-circle btn-xl"
                type="button"
                value="="
                onClick={this.handleOperator}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
