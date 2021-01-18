import React, {Component} from 'react'
import {LineChart} from '../reusables';

class UserStats extends Component{
    render() {
      return (
  
        <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
          <div className="card card-small">
            <div className="card-header border-bottom">
              <h6 className="m-0">Users</h6>
            </div>
            <div className="card-body pt-0">
              <div className="row border-bottom py-2 bg-light">
                <div className="col-12 col-sm-6">
                  <div id="blog-overview-date-range" className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0" style={{maxWidth: '350px'}}>
                    <input type="text" className="input-sm form-control" name="start" placeholder="Start Date" id="blog-overview-date-range-1" />
                    <input type="text" className="input-sm form-control" name="end" placeholder="End Date" id="blog-overview-date-range-2" />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="material-icons"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                  <button type="button" className="btn btn-sm btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">View Full Report →</button>
                </div>
              </div>
              <LineChart data={data}/>
            </div>
          </div>
        </div>
      );
    }
  }

const data = [{
  data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960,1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
  label: 'Past month',
  backgroundColor: 'rgba(0,123,255,0.1)',
  borderColor: 'rgba(0,123,255,1)',
  pointBackgroundColor: 'rgb(0,123,255)',
  pointHoverBackgroundColor: 'rgba(255,65,105,1)',
},
{
  data: [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
  label: 'This Month',
  backgroundColor: 'rgba(255,65,105,0.1)',
  borderColor: 'rgba(255,65,105,1)',
  pointBackgroundColor: '#ffffff',
  pointHoverBackgroundColor: 'rgba(255,65,105,1)',
}
] 

export default UserStats