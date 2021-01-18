import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboardComponents/dashboard'
import Error from './components/error'
import Sidenav from './components/partials/Sidenav'
import Mainnav from './components/partials/Mainnav'
import BreadCrumbs from './components/partials/Breadcrumbs'
import Footer from './components/partials/Footer'
import AddPost from './components/addPost/addPost'
import UserProfile from './components/user/profile'
import Posts from './components/posts/posts'
import Tables from './components/tables/tables'
import Forms from './components/forms/forms'

const Router = () =>{
    return(
        <BrowserRouter>
            <div className = 'h-100'>
                <div className="container-fluid">
                    <div className="row">
                        <Sidenav/>
                        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                            <div className="main-navbar sticky-top bg-white">
                                <Mainnav/>
                            </div>                                
                            <div className="main-content-container container-fluid px-4">
                                <BreadCrumbs/>
                                    <Switch> 
                                        <Route exact path = '/' component = {Dashboard}/>
                                        <Route exact path = '/addPost' component = {AddPost}/>
                                        <Route exact path = '/user_profile' component = {UserProfile}/>
                                        <Route exact path = '/posts' component = {Posts}/>
                                        <Route exact path = '/tables' component = {Tables}/>
                                        <Route exact path = '/forms' component = {Forms}/>
                                        <Route path = '*' component = {Error}/>  
                                    </Switch>
                            </div>   
                            <Footer/>     
                        </main>
                    </div>         
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Router