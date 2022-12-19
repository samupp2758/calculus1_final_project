fetch("files/data_shortened.json")
  .then(response => response.json())
  .then(data_ =>{ 
    fetch("files/data_predicted.json")
    .then(response => response.json())
    .then(data_predicted_ =>{ 
      const data = {
        labels: Object.keys(data_),
        datasets: [
            {
              label: 'Dataset Reality',
              data: Object.values(data_),
              backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                yAxisID: 'y',
            },
            {
              label: 'Dataset Predicted',
              data: Object.values(data_predicted_),
              backgroundColor: 'rgb(99, 255, 132)',
                borderColor: 'rgb(99, 255, 132)',
            yAxisID: 'y',
            }
          ]
      };
      
      const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value+"s";
                        }
                    },
                    text:'Time (seconds)',
                    display:true
                },
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value+" meters";
                        }
                    },
                    text:'Distance (meters)',
                    display:true
                }
            }
        }
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  })  });