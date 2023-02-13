// Write your code here

import {Component} from 'react'
import Login from './Login'
import LogOut from './Logout'
import './index.css'

const loginBtn = () => <Login />
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <this.loginBtn />
        </div>
      </div>
    )
  }
}

export default Home
