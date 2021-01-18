import React, {Component} from 'react'
import DarkTable from './darkTable'
import LightTable from './lightTable'

class Tables extends Component{
    render() {
      return (
        <div>
          <LightTable/>
          <DarkTable/>
        </div>
      );
    }
  }

export default Tables