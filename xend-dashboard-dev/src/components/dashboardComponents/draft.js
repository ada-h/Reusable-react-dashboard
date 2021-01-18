import React, {Component} from 'react'

class Drafts extends Component{
    render() {
      return (
  
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          {/* Quick Post */}
          <div className="card card-small h-100">
            <div className="card-header border-bottom">
              <h6 className="m-0">New Draft</h6>
            </div>
            <div className="card-body d-flex flex-column">
              <form className="quick-post-form">
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Brave New World" /> </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Words can be like X-rays if you use them properly..." defaultValue={""} />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-accent">Create Draft</button>
                </div>
              </form>
            </div>
          </div>
          {/* End Quick Post */}
        </div>
      );
    }
  }

export default Drafts