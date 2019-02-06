import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2'

class PieChart extends Component {

  render() {
      const { hoverBorderColor, backgroundColorArray, data, labels, height} = this.props;
    return (
        <Doughnut 
            className= " m-auto"
            data = {{
                datasets: [{
                    hoverBorderColor: hoverBorderColor ? hoverBorderColor : '#ffffff',
                    data,
                    backgroundColor: backgroundColorArray ? backgroundColorArray : defaultBackgroundColor,
                }],
                labels
            }} 
            height={height ? height : 220} 
        />
    );
  }
}

const defaultBackgroundColor = [
    'rgba(0,123,255,0.9)',
    'rgba(0,123,255,0.5)',
    'rgba(0,123,255,0.3)'
  ];

export {PieChart};
