var ctx = document.getElementById('barChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: '#7476C0',
            borderColor: '#4D4D73',
            data: [50, 100, 175, 125, 225, 200, 100],
        }]
    },

    // Configuration options go here
    options: {
    	layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30
            }
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
	        yAxes: [{
	            gridLines: {
	                offsetGridLines: true,

	            },
	            ticks: {
	            	// beginAtZero: true,
	            	min: 50,
	            	stepSize: 50,
	            }

	        }],
	    }
    }
});