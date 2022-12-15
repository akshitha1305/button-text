// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onCLickingSubscribeButt = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button type="button" className="button">
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="button">
        Subscribe
      </button>
    )
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          onClick={this.onCLickingSubscribeButt}
          className="button"
          type="button"
        >
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
