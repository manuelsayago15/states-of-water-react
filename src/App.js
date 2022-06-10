import React from 'react';
import './App.css';

class StateOfWater extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { StateOfWater: '' };
    console.log(props)
  }

  render() {
    return (
      <div className={this.props.stateStyle}>At {this.props.temperature}°C, water is considered to be a {this.props.stateOfWater} state of matter</div>
    );
  }
}


class WaterTemperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', stateOfWater: '', stateStyle: ''};
  }

  handleInputChange (event) {
    //console.log(event)
    if(event.target.value < 8 && event.target.value !== ''){
      this.setState({
        stateOfWater: 'Solid',
        stateStyle: 'solid'
      })
    } else if (event.target.value > 7 && event.target.value < 63) {
        this.setState({
          stateOfWater: 'Liquid',
          stateStyle: 'liquid'
        })
    } else if(event.target.value > 62) {
        this.setState({
          stateOfWater: 'Gas',
          stateStyle: 'gas'
        })
    } else if(event.target.value === ''){
        this.setState({
          stateOfWater: '',
          stateStyle: ''
        })
    }
    this.setState({
      temperature: event.target.value
    }, function () {
      console.log(this.state);
    })
    console.log(event);
    event.target.value = ''
  }

  render() {
    return (
      <React.Fragment>
        <input type="number" placeholder='Type a number' value={this.state.temperature} onChange={this.handleInputChange.bind(this)}/>
        <StateOfWater temperature={this.state.temperature} stateOfWater={this.state.stateOfWater} stateStyle={this.state.stateStyle}/>
      </React.Fragment>
    );
  }
}


function App() {
  return (
    <div className="App">
      <WaterTemperature />
    </div>
  )
}

export default App;
