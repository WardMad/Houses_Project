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
      .then(data => this.setState({ data: data.results }));
  }

  render() {
    let x = this.state.data;
// console.log(x)
    const houseList = x.map((item, index) => (
        <tr key={index}>
          <td>{item.value}</td>
          <td>{item.address}</td>
          <td>{item.city}</td>
          <td>{item.rooms}</td>
          
      
       </tr>
     
    ));
   
   
    return (
      <div>
        <h3>House Info from db</h3>

           <table> 
             <tbody>{houseList}</tbody>
           </table>
     
      </div>
    );
  }
}
export default HouseFromDB;
