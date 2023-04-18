import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const lemon = parseInt(Math.ceil(Math.random() * 100))
    this.setState(prevState => ({
      count: prevState.count + lemon,
    }))
  }

  jaddu2 = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {count} = this.state
    const meet1 = this.jaddu2()

    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1>{`Count ${count}`}</h1>
          <p>{`Count is ${meet1}`}</p>
          <button type="button" onClick={this.increment}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
