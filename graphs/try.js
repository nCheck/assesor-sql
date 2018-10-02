var jsonfile = {
   "jsonarray": [{
      "planet": "Nehhal",
      "gravity": 10
   }, {
      "planet": "Shreya",
      "gravity": 14
   }]
};

var labels = jsonfile.jsonarray.map(function(e) {
   return e.planet;
});
var data = jsonfile.jsonarray.map(function(e) {
   return e.gravity;
});;

// var chartOptions = {
//   scales: {
//     xAxes: [{
//       barPercentage: 1,
//       categoryPercentage: 0.6
//     }],
//  //    yAxes: [{
//  //      id: "y-axis-density"
//  //    },
//  // //    ticks: {
//  // //   beginAtZero: true;
//  // // }
//  //    {
//  //    id: "y-axis-gravity"
//  //    }]
//  yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//   }
// };
var ctx = canvas.getContext('2d');
// var config = {
//    type: 'polarArea',
//   options:chartOptions,
//    data: {
//       labels: labels,
//       datasets: [{
//          label: 'Graph Line',
//          data: data,
//          backgroundColor: 'rgba(0, 119, 204, 0.3)',
//            borderColor: 'rgba(0, 99, 132, 1)'
//       }]
//    }
// };

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// var chart = new Chart(ctx, config);
