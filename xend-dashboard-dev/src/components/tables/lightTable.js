import React, {Component} from 'react'

class LightTable extends Component{
    render(){
        return(
            <div className="row">
            <div className="col">
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Active Users</h6>
                </div>
                <div className="card-body p-0 pb-3 text-center">
                  <table className="table mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">#</th>
                        <th scope="col" className="border-0">First Name</th>
                        <th scope="col" className="border-0">Last Name</th>
                        <th scope="col" className="border-0">Country</th>
                        <th scope="col" className="border-0">City</th>
                        <th scope="col" className="border-0">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ali</td>
                        <td>Kerry</td>
                        <td>Russian Federation</td>
                        <td>Gdańsk</td>
                        <td>107-0339</td>
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
                        <td>Jerry</td>
                        <td>Nathan</td>
                        <td>Cyprus</td>
                        <td>Braunau am Inn</td>
                        <td>214-4225</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Colt</td>
                        <td>Angela</td>
                        <td>Liberia</td>
                        <td>Bad Hersfeld</td>
                        <td>1-848-473-7416</td>
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

export default LightTable