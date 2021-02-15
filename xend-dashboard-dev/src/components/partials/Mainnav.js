import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/ActiveAction';

class Mainnav extends Component{
  constructor(props){
    super(props);

  }

    render() {
      const { auth } = this.props

      return (
        <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
          <form action="#" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search" />
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
          </form>
          <ul className="navbar-nav border-left flex-row ">
            <li className="nav-item border-right dropdown notifications">
              <Link to= '' className="nav-link nav-link-icon text-center" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="nav-link-icon__wrapper">
                  <i className="material-icons"></i>
                  <span className="badge badge-pill badge-danger">2</span>
                </div>
              </Link>
              <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                <Link to= '' className="dropdown-item">
                  <div className="notification__icon-wrapper">
                    <div className="notification__icon">
                      <i className="material-icons"></i>
                    </div>
                  </div>
                  <div className="notification__content">
                    <span className="notification__category">Analytics</span>
                    <p>Your website’s active users count increased by
                      <span className="text-success text-semibold">28%</span> in the last week. Great job!</p>
                  </div>
                </Link>
                <Link to= '' className="dropdown-item">
                  <div className="notification__icon-wrapper">
                    <div className="notification__icon">
                      <i className="material-icons"></i>
                    </div>
                  </div>
                  <div className="notification__content">
                    <span className="notification__category">Sales</span>
                    <p>Last week your store’s sales count decreased by
                      <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                  </div>
                </Link>
                <Link to= '' className="dropdown-item notification__all text-center"> View all Notifications </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to= '' className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <img className="user-avatar rounded-circle mr-2" src={require("../../assets/images/avatars/0.jpg")} alt="User Avatar" />
                <span className="d-none d-md-inline-block">Sierra Brooks</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-small">
                <Link to= '' className="dropdown-item" href="user-profile-lite.html">
                  <i className="material-icons"></i> Profile</Link>
                <Link to= '' className="dropdown-item" href="components-blog-posts.html">
                  <i className="material-icons">vertical_split</i> Blog Posts</Link>
                <Link to= '' className="dropdown-item" href="add-new-post.html">
                  <i className="material-icons">note_add</i> Add New Post</Link>
                <div className="dropdown-divider" />
                {
                  !auth.isAuthenticated && (
                    <Link to= '/login' className="dropdown-item text-success"  >
                  <i className="material-icons text-success"></i> Log in </Link>
                  )
                }
                {auth.isAuthenticated && (
                  <Link to= '/' className="dropdown-item text-danger" onClick={logout} >
                  <i className="material-icons text-danger"></i> Logout </Link>
                )}
              </div>
            </li>
          </ul>
        </nav>
      );
    }
}

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)( Mainnav );
