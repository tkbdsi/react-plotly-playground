import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{marginLeft: "20px"}}>Tony's Plotly Playground</h2>
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
