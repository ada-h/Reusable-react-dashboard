

export const smallChart = {
      data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
        datasets: [{
          label: 'Today',
          fill: 'start',
          data: [1, 7, 1, 3, 1, 4, 8],
          backgroundColor:'rgb(0,123,255,0.1)',
          borderColor: 'rgb(0,123,255)',
          borderWidth: 1.5,
        }]
      },   
}

export const UserData ={
    labels: Array.from(new Array(30), function (_, i) {
      return i === 0 ? 1 : i;
    }),
    datasets: [{
      label: 'Current Month',
      fill: 'start',
      data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
      backgroundColor: 'rgba(0,123,255,0.1)',
      borderColor: 'rgba(0,123,255,1)',
      pointBackgroundColor: '#ffffff',
      pointHoverBackgroundColor: 'rgb(0,123,255)',
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 3
    }, {
      label: 'Past Month',
      fill: 'start',
      data: [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
      backgroundColor: 'rgba(255,65,105,0.1)',
      borderColor: 'rgba(255,65,105,1)',
      pointBackgroundColor: '#ffffff',
      pointHoverBackgroundColor: 'rgba(255,65,105,1)',
      borderDash: [3, 3],
      borderWidth: 1,
      pointRadius: 0,
      pointHoverRadius: 2,
      pointBorderColor: 'rgba(255,65,105,1)'
    }]
  };

  // Options
  export const bouOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    elements: {
      line: {
        // A higher value makes the line look skewed at this ratio.
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
    // Uncomment the next lines in order to disable the animations.
    // animation: {
    //   duration: 0
    // },
    hover: {
      mode: 'nearest',
      intersect: false
    },
    tooltips: {
      custom: false,
      mode: 'nearest',
      intersect: false
    }
  };
