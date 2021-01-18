import React, {Component} from 'react'

class User extends Component{
    render(){
        return(
            <div className="col-lg-4">
            <div className="card card-small mb-4 pt-3">
              <div className="card-header border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img className="rounded-circle" src={require("../../assets/images/avatars/0.jpg")} alt="User Avatar" width={110} /> </div>
                <h4 className="mb-0">Sierra Brooks</h4>
                <span className="text-muted d-block mb-2">Project Manager</span>
                <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                  <i className="material-icons mr-1">person_add</i>Follow</button>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-4">
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">Workload</strong>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} style={{width: '74%'}}>
                        <span className="progress-value">74%</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-4">
                  <strong className="text-muted d-block mb-2">Description</strong>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</span>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default User