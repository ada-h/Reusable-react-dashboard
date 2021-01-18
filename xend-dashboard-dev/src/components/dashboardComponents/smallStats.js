import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {smallChart} from './smallCharts'

class SmallStats extends Component{

    render() {
      return ( 
        <div className="row">
          <div className="col-lg col-md-6 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Posts</span>
                    <h6 className="stats-small__value count my-3">2,390</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                  </div>
                </div>
                {/* <canvas height={120} className="blog-overview-stats-small-1" /> */}
                <Line 
                  height={120} 
                  data ={smallChart}
                />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Pages</span>
                    <h6 className="stats-small__value count my-3">182</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                  </div>
                </div>
                <canvas height={120} className="blog-overview-stats-small-1"/>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Comments</span>
                    <h6 className="stats-small__value count my-3">8,147</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                  </div>
                </div>
                <canvas height={120} className="blog-overview-stats-small-3" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-6 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Users</span>
                    <h6 className="stats-small__value count my-3">2,413</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                  </div>
                </div>
                <canvas height={120} className="blog-overview-stats-small-4" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-4 col-sm-12 mb-4">
            <div className="stats-small stats-small--1 card card-small">
              <div className="card-body p-0 d-flex">
                <div className="d-flex flex-column m-auto">
                  <div className="stats-small__data text-center">
                    <span className="stats-small__label text-uppercase">Subscribers</span>
                    <h6 className="stats-small__value count my-3">17,281</h6>
                  </div>
                  <div className="stats-small__data">
                    <span className="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                  </div>
                </div>
                <canvas height={120} className="blog-overview-stats-small-5" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default SmallStats