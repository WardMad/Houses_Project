import React, { Component } from "react";
// import { inject, observer } from "mobx-react";

// @inject("SomeStore")
// @observer
class Filter extends Component {
  constructor() {
    super();
    this.state = {
      price: []
    };
  }

//   componentDidMount() {
//     fetch("/price")
//       .then(res => res.json())
//       .then(data => this.setState({ data: data.results }));
//   }

  render() {
 
    const pricesMin = [];
    for (let i = 0; i <= 3000000; i += 50000) {
     pricesMin.push(`€ ${i}`);
    }
    const pricesMax = [];
    for (let i = 50000; i <= 3000000; i += 50000) {
     pricesMax.push(`€ ${i}`);
    }

  
const filterMin = pricesMin.map((el, i)=> {
return <option key={i} value={el}>

{el}

</option>


});
const filterMax = pricesMax.map((el, i)=> {
    return <option key={i} value={el}>
    
    {el}
    
    </option>
    
    
    });

    let selectMin=<select className='select'>
   <option  selected>0</option>
 {filterMin}
  </select> 
   let selectMax=<select className='select'>
   <option  selected>No maximum</option>
 {filterMax}
  </select> 
   
    return (
      <div>
          <div className='f'>
  <h4>Price</h4>
{selectMin}<br/>
{selectMax}
    </div>
     
      </div>
    );
  }
}
export default Filter;
