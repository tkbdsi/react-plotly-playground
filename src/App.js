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
      n: 3.0,
      steps: 100,
    };
    this.calculateNewGrid = this.calculateNewGrid.bind(this);
    this.setStateCallBack = this.setStateCallBack.bind(this);
    this.updateSteps = this.updateSteps.bind(this);
  }

  componentDidMount() {
    document.getElementById('length-value').value = this.state.L;
    document.getElementById('node-value').value = this.state.n;
    document.getElementById('steps-value').value = this.state.steps;
    this.calculateNewGrid();
  }

  setStateCallBack = () => {
    console.log(`\tAfter Set State Counter ${this.state.L} ${this.state.n}`);
  }

  updateBoxWidth = () => {
    let currentL = document.getElementById('length-value').value;
    this.setState({
      ...this.state,
      L: currentL,
    },this.calculateNewGrid);
  }

  updateEnergyNode = () => {
    let currentN = document.getElementById('node-value').value;
    this.setState({
      ...this.state,
      n: currentN,
    },this.calculateNewGrid);
  }

  updateSteps = () => {
    let currentSteps = document.getElementById('steps-value').value;
    this.setState({
      ...this.state,
      steps: currentSteps,
    },this.calculateNewGrid);
  }

  calculateNewGrid = () => {

    console.log('Calculate new grid');

    const stepSize = this.state.L / this.state.steps;
    let tempX = [];
    let tempY = [];

    for (let i = 0; i < this.state.steps; ++i) {
      let xStart = -1.0*this.state.L / 2.0;
      tempX.push(xStart + i*stepSize);
      // let Energy = this.state.n * this.state.n / 2.0 / this.state.L / this.state.L;
      let Energy = 0;
      if ( this.state.n % 2 === 0) {
        tempY.push(Energy + Math.sin(this.state.n*Math.PI*tempX[i] / this.state.L));
      }
      else {
        tempY.push(Energy + Math.cos(this.state.n*Math.PI*tempX[i] / this.state.L));
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
        <UserInputFields L={this.state.L} n={this.state.n} updateBoxWidth={this.updateBoxWidth} updateEnergyNode={this.updateEnergyNode} updateSteps={this.updateSteps} />

        {/* <button style={{textAlign: "center"}} onClick={this.calculateNewGrid}>Calculate New Solution</button> */}

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
