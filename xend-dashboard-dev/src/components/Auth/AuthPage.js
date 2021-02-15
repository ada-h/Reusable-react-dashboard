import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './LoginPage'

const AuthPage = () => {
    return (
        <BrowserRouter>
        <div className='h-100' >
            <div className="container-fluid" >
            <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3" >
                <div className="main-content-container container-fluid px-4" >
                    <Switch>
                    <Route exact path = '/login' component = {LoginPage} />
                    </Switch>
                </div>

            </main>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default AuthPage