// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          className="image-container"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-count">Speed is {count}mph</h1>
        <p className="limit">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button className="button" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button-break" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
