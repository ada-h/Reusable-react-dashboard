import React,{Component} from 'react'
import Details from './details'
import User from './user'

class UserProfile extends Component{
    render() {
      return (
  
        <div className="row">
          <User/>
          <Details/>
        </div>
      );
    }
  }

export default UserProfile