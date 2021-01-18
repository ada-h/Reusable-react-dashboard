import React, {Component} from 'react'

class Details extends Component{
    render(){
        return(
            <div className="col-lg-8">
            <div className="card card-small mb-4">
              <div className="card-header border-bottom">
                <h6 className="m-0">Account Details</h6>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  <div className="row">
                    <div className="col">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feFirstName">First Name</label>
                            <input type="text" className="form-control" id="feFirstName" placeholder="First Name" defaultValue="Sierra" /> </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="feLastName">Last Name</label>
                            <input type="text" className="form-control" id="feLastName" placeholder="Last Name" defaultValue="Brooks" /> </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feEmailAddress">Email</label>
                            <input type="email" className="form-control" id="feEmailAddress" placeholder="Email" defaultValue="sierra@example.com" /> </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="fePassword">Password</label>
                            <input type="password" className="form-control" id="fePassword" placeholder="Password" /> </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="feInputAddress">Address</label>
                          <input type="text" className="form-control" id="feInputAddress" placeholder="1234 Main St" /> </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="feInputCity">City</label>
                            <input type="text" className="form-control" id="feInputCity" /> </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="feInputState">State</label>
                            <select id="feInputState" className="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" /> </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label htmlFor="feDescription">Description</label>
                            <textarea className="form-control" name="feDescription" rows={5} defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"} />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-accent">Update Account</button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Details