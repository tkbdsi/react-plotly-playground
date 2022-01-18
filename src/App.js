import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import './static/UserInputs.css';

import Header from './components/Header';
import UserInputFields from './components/UserInputFields';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      xdata: [],
      ydata: [],

    };
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{marginLeft: "20px"}}>Tony's Plotly Playground</h2>
        <Header />
        <UserInputFields />
        
        <Plot data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]} />
      </React.Fragment>
    )
  }
}


export default App;
