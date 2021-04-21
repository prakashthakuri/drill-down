export const netLineChart = {
     type: 'bar',
     data: {
         labels: [
             'Jan',
             'Feb',
             'Mar',
             'Apr',
             'May',
             'Jun',
             'Jul',
             'Aug',
             'Sep',
             'Nov',
             'Dec'
         ],
         datasets: [
             {
                label: "Net",
                type: 'line',
                data: [58, 55, 64, 61, 55,55,72,63,64,69,78],
                borderColor: "#36495d",
                borderWidth: 3,


             },

             {
                 label: 'Exiiting Customers (Unchanged Contracts)',
                 data: [50, 53,57,52,56,59,63,58,65,65,69,64],
                 backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
                borderWidth: 3
             },
             {
                 label: 'Exiiting Customers (Expanion Revenue)',
                 data: [5,5,5,6,5,5,5,7,3,5,4,8],
                 backgroundColor: "rgba(56, 153,132,.5)",
                borderColor: "#47c484",
                borderWidth: 3
             },
             {
                 label: 'New Customers',
                 data: [5,3,7,8,6,9,6,9,6,8,5,5],
                 backgroundColor: 'blue',
                 borderColor: '#214c3d',
                 borderWidth: 3,
                 
                
             },
             {
                 label: 'Churned Customers',
                 data: [-4,-3,-5,-2,-6,-9,-3,-8,-6,-7,-6,-4],
                 borderColor: 'black',
                 borderWidth: 3,
               
             
                 
                 
             }


         ]
     },
     options: {
         responsive: true,
        //  lineTension: 1,
         scales: {
             x: {
                 stacked: true
             },
             y: {
                 stacked: true
             },
             yAxes: [
                 {
                stacked: false,
                 ticks: {
                     beginAtZero: true,
                     padding: 25
                 }
                }
             ],
             xAxes: [{
                 stacked: true,
                 
             }]
         }
        
     }
}

export default netLineChart