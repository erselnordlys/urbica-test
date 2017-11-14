import React, { Component } from 'react';
import './App.css';
import CalendarContainer from '../CalendarContainer';
import ListContainer from '../ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer />
        <CalendarContainer/>
      </div>
    );
  }
}

export default App;
