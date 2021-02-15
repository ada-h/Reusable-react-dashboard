import React, {Component} from 'react'
import {FormInput} from '../reusables/inputs/FormInput'
import Button from '../reusables/buttons/Button'
import { connect } from 'react-redux';

import { authUser, logout } from '../../redux/actions/ActiveAction';


class Login extends Component{

    constructor(props){
      super(props);

      this.state = {
        email: '',
        password: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }  

    handleSubmit(e) {
      const { email, password } = this.state;
      e.preventDefault();
      this.props.authUser('login', { email, password });
    }

      render() {
        const errorStyle = {
          color: 'red',
      }
        const { email, password } = this.state;
       
        const { error } = this.props  
          const error_username = error.message && error.message.message
          const error_password = ``
        return (
            <div>
                <form>
                          <div className="form-column">
                            <div className="form-group col-md-6">
                              <input 
                                type = 'text' 
                                id="validationServer01" 
                                placeholder="Your email" 
                                defaultValue="email@example.com" 
                                required
                                value={email}
                                name="email"
                                onChange={this.handleChange}
                                className = 'form-control is-valid'
                              />
                               <div 
                              style = {errorStyle} 
                              className = 'valid-feedback'
                              >
                              {error_username}
                              </div>
                            </div>
                            <div className="form-group col-md-6">
                            <input 
                                type = 'password' 
                                id="validationServer01" 
                                placeholder="password"  
                                required
                                value={password}
                                name="password"
                                onChange={this.handleChange}
                                className = 'form-control is-valid'
                              />
                               <div 
                              style = {errorStyle} 
                              className = 'valid-feedback'
                              >
                              {error_password}
                              </div>              
                            </div>
                            <Button theme="btn-success btn-sm" buttonAction={this.handleSubmit}  > <span>Log In</span> </Button>
                          </div>
                </form>
            </div>
        )
    }
}

export default connect((store) => ({error: store.error}), { authUser, logout })(Login)