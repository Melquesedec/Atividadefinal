
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [-50,-40,-30,-20,-10,0,10,20,30,40,50],
      datasets: [{ 
          data: [5,6,4,4,9,11,3,-5,-9,-13,-18],
          label: "Paypal",
          borderColor: "#ff0000",
          backgroundColor: "",
          fill: true,
        }, { 
          data: [3,-2,1,1,-5,2,3,5,3,2,18],
          label: "Gumroad",
          borderColor: "#adff2f",
          backgroundColor: "",
          fill: true,
        }, { 
          data: [3,5,4,1,6,3,5,5,8,12,18],
          label: "Others",
          borderColor: "#8f2eff",
          backgroundColor:"",
          fill: true,
        },
      ]
    },
  });