import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

class LineChart extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      datasets: []
    }
  }
  prepareData(){
    
      let tempData = this.props.data.map((item, index) => {
        return {
          label: item.label,
          fill: 'start',
          data: item.data,
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
          pointBackgroundColor: item.pointBackgroundColor,
          pointHoverBackgroundColor: item.pointHoverBackgroundColor,
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        }
      });
      this.setState({datasets: tempData});
  }

  componentDidMount(){
    this.prepareData();
  }
  
  render() {
    
    const 
        { 
          height, maxWidth,
        } = this.props;

    return (
        <Line 
        height={height ? height: '130'} 
        style={maxWidth ? maxWidth : '100% !important'} 
        data= {{
            labels: Array.from(new Array(30), function (_, i) {
                return i === 0 ? 1 : i;
              }),
              datasets: this.state.datasets           
        }}
        options = {options}
      />
    );
  }
}

const options = 
                {
                    responsive: true,
                    legend: {
                      position: 'top'
                    },
                    elements: {
                      line: {
                        tension: 0.3
                      },
                      point: {
                        radius: 0
                      }
                    },
                    scales: {
                      xAxes: [{
                        gridLines: false,
                        ticks: {
                          callback: function (tick, index) {
                            // Jump every 7 values on the X axis labels to avoid clutter.
                            return index % 7 !== 0 ? '' : tick;
                          }
                        }
                      }],
                      yAxes: [{
                        ticks: {
                          suggestedMax: 45,
                          callback: function (tick, index, ticks) {
                            if (tick === 0) {
                              return tick;
                            }
                            // Format the amounts using Ks for thousands.
                            return tick > 999 ? (tick/ 1000).toFixed(1) + 'K' : tick;
                          }
                        }
                      }]
                    },
                    hover: {
                      mode: 'nearest',
                      intersect: false
                    },
                    tooltips: {
                      custom: false,
                      mode: 'nearest',
                      intersect: false
                    }
                }


export {LineChart};
