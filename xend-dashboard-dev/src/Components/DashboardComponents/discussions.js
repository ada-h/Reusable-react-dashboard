import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Discussions extends Component{
    render() {
      return (
  
        <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
          <div className="card card-small blog-comments">
            <div className="card-header border-bottom">
              <h6 className="m-0">Discussions</h6>
            </div>
            <div className="card-body p-0">
              <div className="blog-comments__item d-flex p-3">
                <div className="blog-comments__avatar mr-3">
                  <img src={require("../../assets/images/avatars/1.jpg")} alt="User avatar" /> </div>
                <div className="blog-comments__content">
                  <div className="blog-comments__meta text-muted">
                    <Link to = '' className="text-secondary">James Johnson</Link> on
                    <Link to = '' className="text-secondary">Hello World!</Link>
                    <span className="text-muted">– 3 days ago</span>
                  </div>
                  <p className="m-0 my-1 mb-2 text-muted">Well, the way they make shows is, they make one show ...</p>
                  <div className="blog-comments__actions">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-white">
                        <span className="text-success">
                          <i className="material-icons">check</i>
                        </span> Approve </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-danger">
                          <i className="material-icons">clear</i>
                        </span> Reject </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-light">
                          <i className="material-icons">more_vert</i>
                        </span> Edit </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-comments__item d-flex p-3">
                <div className="blog-comments__avatar mr-3">
                  <img src={require("../../assets/images/avatars/2.jpg")} alt="User avatar" /> </div>
                <div className="blog-comments__content">
                  <div className="blog-comments__meta text-muted">
                    <Link to = '' className="text-secondary">James Johnson</Link> on
                    <Link to = '' className="text-secondary">Hello World!</Link>
                    <span className="text-muted">– 4 days ago</span>
                  </div>
                  <p className="m-0 my-1 mb-2 text-muted">After the avalanche, it took us a week to climb out. Now...</p>
                  <div className="blog-comments__actions">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-white">
                        <span className="text-success">
                          <i className="material-icons">check</i>
                        </span> Approve </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-danger">
                          <i className="material-icons">clear</i>
                        </span> Reject </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-light">
                          <i className="material-icons">more_vert</i>
                        </span> Edit </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-comments__item d-flex p-3">
                <div className="blog-comments__avatar mr-3">
                  <img src={require("../../assets/images/avatars/3.jpg")} alt="User avatar" /> </div>
                <div className="blog-comments__content">
                  <div className="blog-comments__meta text-muted">
                    <Link to = '' className="text-secondary">James Johnson</Link> on
                    <Link to = '' className="text-secondary">Hello World!</Link>
                    <span className="text-muted">– 5 days ago</span>
                  </div>
                  <p className="m-0 my-1 mb-2 text-muted">My money's in that office, right? If she start giving me...</p>
                  <div className="blog-comments__actions">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-white">
                        <span className="text-success">
                          <i className="material-icons">check</i>
                        </span> Approve </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-danger">
                          <i className="material-icons">clear</i>
                        </span> Reject </button>
                      <button type="button" className="btn btn-white">
                        <span className="text-light">
                          <i className="material-icons">more_vert</i>
                        </span> Edit </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-top">
              <div className="row">
                <div className="col text-center view-report">
                  <button type="submit" className="btn btn-white">View All Comments</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

export default Discussions