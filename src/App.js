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
      L: 1.0,
      n: 1.0,
      steps: 100,
    };
    this.calculateNewGrid = this.calculateNewGrid.bind(this);
    this.setStateCallBack = this.setStateCallBack.bind(this);
  }

  componentDidMount() {
    document.getElementById('length-value').value = this.state.L;
    document.getElementById('node-value').value = this.state.n;
  }

  setStateCallBack = () => {
    console.log('Event: After Setting State');
    console.log(`\tAfter Set State Counter ${this.state.ydata}`);
  }

  calculateNewGrid = () => {
    const stepSize = this.state.L / this.state.steps;
    let tempX = [];
    let tempY = [];
    for (let i = 0; i < this.state.steps; ++i) {
      tempX.push(i*stepSize);
      if ( this.state.n % 2 === 0) {
        tempY.push(Math.sin(this.state.n*Math.PI*i*stepSize / this.state.L));
      }
      else {
        tempY.push(Math.cos(this.state.n*Math.PI*i*stepSize / this.state.L));
      }
    }
    this.setState({
      ...this.state,
      xdata: tempX,
      ydata: tempY,
    }, this.setStateCallBack);
  } 

  render() {
    return (
      <React.Fragment>
        <h2 style={{marginLeft: "20px"}}>Tony's Plotly Playground</h2>
        
        <Header />
        <UserInputFields L={this.state.L} n={this.state.n} />

        <button style={{textAlign: "center"}} onClick={this.calculateNewGrid}>Calculate New Solution</button>

        <Plot style={{textAlign: "center"}} data={[
          {
            x: this.state.xdata,
            y: this.state.ydata,
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
