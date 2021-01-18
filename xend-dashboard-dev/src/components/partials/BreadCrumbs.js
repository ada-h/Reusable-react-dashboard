import React,{Component} from 'react'


class BreadCrumbs extends Component{
    render() {
      return (  
        <div className="page-header row no-gutters py-4">
          <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span className="text-uppercase page-subtitle">Dashboard</span>
            <h3 className="page-title">Blog Overview</h3>
          </div>
        </div>
      );
    }
  };
  

export default BreadCrumbs