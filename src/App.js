import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { inject, observer } from "mobx-react";
import Chart from "./Components/Chart";
import HouseFromDB from "./Components/HouseFromDB";

@inject("SomeStore")
@observer
class App extends Component {
  constructor(props) {
    super(props);

    // this.props.SomeStore.showHouse();
  }

  handleSubmit = e => {
    e.preventDefault();
    let inputText = this.xerr.value;
    this.props.SomeStore.addJitem(inputText);
    this.xerr.value = "";
  };

  render() {
    const { SomeStore } = this.props;

    //     const xer = this.state.allwatches.map((item, index) => (
    //       <div key={index}>
    // <h2>{item}</h2>
    // </div>
    //       ))
    // const add = SomeStore.jitems.map((el, i) => (

    //    <li key={i}>
    //    <h4>{el}</h4>
    //    </li>
    // ));
    //Also normalizing

    function refactorDate(num) {
      let element = Date.now() + -num * 24 * 3600 * 1000;
      return new Date(element).toUTCString();
    }

    const HouseList = SomeStore.jitems.map((item, index) => (
      <tbody key={index}>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Price</th>
          <th>Area</th>
        </tr>
        <tr>
          <td>{Math.floor(Math.random() * 6667) + 1}</td>
          <td>{refactorDate(item.added.replace(/\D/g, ""))}</td>
          <td> {item.price.Amount.replace(/\D/g, "")}</td>
          <td>{item.size.gross_m2.replace(/\D/g, "")}</td>
          <td>{item.location.address}</td>
        </tr>
      </tbody>
    ));

    return (
      <div className="App">
        <div className="graph">
          {" "}
          <Chart />{" "}
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                placeholder="search City"
                ref={input => (this.xerr = input)}
              />
              <label>
                {/* EssayJSON:
                <textarea onChange={this.handleChange} /> */}
              </label>
              <HouseFromDB />
              <button type="submit"> Submit</button>

              <h3>You have {SomeStore.numberOfElements} houses </h3>
            </form>
            {/* {xer} */}

            <table>{HouseList}</table>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
