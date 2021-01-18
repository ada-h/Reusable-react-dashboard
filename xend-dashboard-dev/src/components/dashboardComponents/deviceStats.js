import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PieChart} from '../reusables';

class DeviceStats extends Component{
    render() {
      return (
  
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card card-small h-100">
            <div className="card-header border-bottom">
              <h6 className="m-0">Users by device</h6>
            </div>
            <div className="card-body d-flex py-0">
              
              <PieChart data = {[65, 543, 463]} labels={['x' , 'y', 'z']} />
            </div>
            <div className="card-footer border-top">
              <div className="row">
                <div className="col">
                  <select className="custom-select custom-select-sm" style={{maxWidth: '130px'}}>
                    <option>Last Week</option>
                    <option value={1}>Today</option>
                    <option value={2}>Last Month</option>
                    <option value={3}>Last Year</option>
                  </select>
                </div>
                <div className="col text-right view-report">
                  <Link to=''>Full report →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default DeviceStats