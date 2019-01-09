import React, {Component} from 'react';
import Checkbox from './components/checklist/Checklist';
import Links from './components/links/Links';
import './App.css';

const items = [
  1,
  2,
  3,
  4,
  5,
  6,
  7
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: items.reduce((checkbox, checked) => ({
        ...checkbox,
        [checked]: false
      }),)
    }
  }

  checkboxChange = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }))
  }

  // Each function is run to test the status of each checkbox, if the requirements are met then the result is true and that is passed as a prop to to the links to determine which ones are activated

  oneActive = () => {
    if (this.state.checkboxes[1]) {
      return true;
    } else {
      return false;
    }
  }

  twoActive = () => {
    if (this.state.checkboxes[3] && this.state.checkboxes[5]) {
      return true;
    } else {
      return false;
    }
  }

  threeActive = () => {
    if (this.state.checkboxes[1] && this.state.checkboxes[2] && this.state.checkboxes[3] && this.state.checkboxes[4] && this.state.checkboxes[5] && this.state.checkboxes[6] && this.state.checkboxes[7]) {
      return true;
    } else {
      return false;
    }
  }

  fourActive = () => {
    if (!this.state.checkboxes[1] && !this.state.checkboxes[2] && !this.state.checkboxes[3] && !this.state.checkboxes[4] && !this.state.checkboxes[5] && !this.state.checkboxes[6] && !this.state.checkboxes[7]) {
      return true;
    } else {
      return false;
    }
  }

  fiveActive = () => {
    if (this.state.checkboxes[1] && this.state.checkboxes[3] && this.state.checkboxes[5] && this.state.checkboxes[7]) {
      return true;
    } else {
      return false;
    }
  }

  sixActive = () => {
    if (this.state.checkboxes[2] && this.state.checkboxes[4] && this.state.checkboxes[6]) {
      return true;
    } else {
      return false;
    }
  }

  sevenActive = () => {
    if (this.state.checkboxes[1] || this.state.checkboxes[2] || this.state.checkboxes[3] || this.state.checkboxes[4] || this.state.checkboxes[5] || this.state.checkboxes[6] || this.state.checkboxes[7]) {
      return true;
    } else {
      return false;
    }
  }

  createCheckbox = checkbox => (<Checkbox number={checkbox} isChecked={this.state.checkboxes[checkbox]} onCheckboxChange={this.checkboxChange} key={checkbox}/>);

  createCheckboxes = () => items.map(this.createCheckbox);

  render() {
    return (<div className="App">
      <div className="banner">
        <h1>Dynamic links app</h1>
        <h2>Checking items on the checklist will enable/disable the links based on their condition.</h2>
      </div>
      <div className="checkboxes">
        {this.createCheckboxes()}
      </div>
      <Links oneActive={this.oneActive()} twoActive={this.twoActive()} threeActive={this.threeActive()} fourActive={this.fourActive()} fiveActive={this.fiveActive()} sixActive={this.sixActive()} sevenActive={this.sevenActive()}/>
      <h3>An application by Joe Langley</h3>
    </div>);
  }
}

export default App;
