// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div className="counter-bg-container">
        <h1 className="counter-title">
          The Button has been clicked <span>{this.state.count}</span> times
        </h1>
        <p className="counter-desc">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
