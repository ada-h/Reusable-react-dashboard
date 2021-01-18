import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Referals extends Component{
    render() {
      return (
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
          <div className="card card-small">
            <div className="card-header border-bottom">
              <h6 className="m-0">Top Referrals</h6>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-small list-group-flush">
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">GitHub</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">19,291</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">Stack Overflow</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">11,201</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">Hacker News</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">9,291</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">Reddit</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">8,281</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">The Next Web</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">7,128</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">Tech Crunch</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">6,218</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">YouTube</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">1,218</span>
                </li>
                <li className="list-group-item d-flex px-3">
                  <span className="text-semibold text-fiord-blue">Adobe</span>
                  <span className="ml-auto text-right text-semibold text-reagent-gray">827</span>
                </li>
              </ul>
            </div>
            <div className="card-footer border-top">
              <div className="row">
                <div className="col">
                  <select className="custom-select custom-select-sm">
                    <option>Last Week</option>
                    <option value={1}>Today</option>
                    <option value={2}>Last Month</option>
                    <option value={3}>Last Year</option>
                  </select>
                </div>
                <div className="col text-right view-report">
                  <Link to = ''>Full report →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Referals