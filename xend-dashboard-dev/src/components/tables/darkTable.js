import React, {Component} from 'react'

class DarkTable extends Component{
    render(){
        return(
          <div className="row">
          <div className="col">
            <div className="card card-small overflow-hidden mb-4">
              <div className="card-header bg-dark">
                <h6 className="m-0 text-white">Inactive Users</h6>
              </div>
              <div className="card-body p-0 pb-3 bg-dark text-center">
                <table className="table table-dark mb-0">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" className="border-bottom-0">#</th>
                      <th scope="col" className="border-bottom-0">First Name</th>
                      <th scope="col" className="border-bottom-0">Last Name</th>
                      <th scope="col" className="border-bottom-0">Country</th>
                      <th scope="col" className="border-bottom-0">City</th>
                      <th scope="col" className="border-bottom-0">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Graham</td>
                      <td>Brent</td>
                      <td>Benin</td>
                      <td>Ripabottoni</td>
                      <td>1-512-760-9094</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Clark</td>
                      <td>Angela</td>
                      <td>Estonia</td>
                      <td>Borghetto di Vara</td>
                      <td>1-660-850-1647</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Wylie</td>
                      <td>Joseph</td>
                      <td>Korea, North</td>
                      <td>Guelph</td>
                      <td>325-4351</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Garth</td>
                      <td>Clementine</td>
                      <td>Indo
                        nesia</td>
                      <td>Narcao</td>
                      <td>722-8264</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default DarkTable