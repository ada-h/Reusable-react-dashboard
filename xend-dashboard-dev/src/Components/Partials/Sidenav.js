import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {changeActive} from '../../redux/actions/ActiveAction'
import {connect} from 'react-redux'

class Sidenav extends Component{

  handleonClick = (id) => {
    this.props.changeActive(id)
  }

    render() {
      const {components} = this.props
      const MapNav = (components.navList.map (link =>{
        return (  

          <li className="nav-item"
            onClick= {() => this.handleonClick (link.id)}
            key = {link.id}
          >
            <Link to ={`/${link.link}`} className= {components.active === true & components.id === link.id ? "active nav-link":"nav-link"}>
              <i className="material-icons">{link.icon}</i>
              <span> {link.title}</span>
            </Link>
          </li>
        )
      }))
      return(
          <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div className="main-navbar">
            <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <Link to = '/' className="navbar-brand w-100 mr-0" style={{lineHeight: '25px'}}>
                <div className="d-table m-auto">
                  <img id="main-logo" className="d-inline-block align-top mr-1" style={{maxWidth: '25px'}} 
                    src={require("../../assets/images/shards-dashboards-logo.svg")} 
                    alt="Shards Dashboard" 
                  />
                  <span className="d-none d-md-inline ml-1">Xend</span>
                </div>
              </Link>
              <Link to = '/' className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i className="material-icons"></i>
              </Link>
            </nav>
          </div>
          <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search" />
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
          </form>
          <div className="nav-wrapper">
            <ul className="nav flex-column">
              {MapNav}
            </ul>
          </div>
          </aside>
      )
    }
  }

const MapStateToProps = (state) =>{
  return{
    components: state.navLinks
  }
}

const MapDispatchToProps = (dispatch) =>{
  return{
    changeActive: (id) =>{
      dispatch(changeActive(id))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Sidenav)