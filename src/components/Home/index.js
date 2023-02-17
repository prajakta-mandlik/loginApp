// Write your code here

import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import './index.css'
import LogOut from '../Logout'

class Home extends Component {
  state = {isBtnClicked: true}

  onBtnClick = () => {
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }

  render() {
    const {isBtnClicked} = this.state
    return (
      <div className="container">
        <button
          type="button"
          className="card-container"
          onClick={this.onBtnClick}
        >
          <Message isBtnClicked={isBtnClicked} />
          {isBtnClicked ? <Login /> : <LogOut />}
        </button>
      </div>
    )
  }
}

export default Home
