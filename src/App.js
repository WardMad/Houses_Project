import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let store=[];
    store.push({
    name: 'Hendo',
    profs:{ city:'Glasgow', smoke: 'chesterfield'}
  },
  {
    name: 'Benjamin',
    profs:{ city:'Cardiff', smoke: 'Sigaronne'}
  });

    console.log(store.map(i=> i.profs.city))
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
         
          <div>

          <form onSubmit={this.handleSubmit}>
          <input type='text'  placeholder='search City' />
  
        <label>
          EssayJSON:
          <textarea  onChange={this.handleChange} />
        </label>
        <button type='submit'> Submit</button>
          </form>
          </div>

       
        </header>
      </div>
    );
  }
}

export default App;
