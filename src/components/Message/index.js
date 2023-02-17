// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isBtnClicked} = this.props

    return (
      <h1 className="heading">
        {isBtnClicked ? 'Please Login' : 'Welcome User'}
      </h1>
    )
  }
}

export default Message
