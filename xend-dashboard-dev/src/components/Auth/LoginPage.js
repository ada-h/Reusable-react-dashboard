import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import Login from './login';

const LoginPage = ({ auth }) => {
    console.log(auth.isAuthenticated)
    if (auth.isAuthenticated) return <Redirect to="/" />;
  
    return (
      <div>
        < Login />
      </div>
    );
  };
  
  export default withRouter(
    connect(
        store => ({
          auth: store.auth,
        })
      )(LoginPage),
    );
  