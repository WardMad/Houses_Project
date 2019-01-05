import React, { Component } from "react";
// import { inject, observer } from "mobx-react";

// @inject("SomeStore")
// @observer
class HouseFromDB extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("/price")
      .then(res => res.json())
      .then(data => this.setState({ data: [data] }));
  }
  render() {
    let x = this.state.data;

    const eList = x.map((item, index) => (
      <tbody key={index}>
        <tr>
          <th>Price</th>
        </tr>
        <tr>
          <td>{item.data}</td>
        </tr>
      </tbody>
    ));
    console.log(eList);
    return (
      <div>
        <h3>House Info from db</h3>

        <table>{eList}</table>
      </div>
    );
  }
}
export default HouseFromDB;
