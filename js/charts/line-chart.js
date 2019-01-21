var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(116, 118, 192, .2)',
            borderColor: '#7476C0',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        }]
    },

    // Configuration options go here
    options: {
    	elements: {
	        line: {
	            tension: 0,
	        },
	        point: {
	        	radius: 5,
	        	backgroundColor: '#fff',
	        },
	    },
    	responsive: true,
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
	                offsetGridLines: true
	            },
	            ticks: {
	            	beginAtZero: true,
	            	min: 500,
	            	stepSize: 500,
	            }

	        }],
	        xAxes: [{
	            gridLines: {
	                offsetGridLines: true
	            },
	        }],
	    },
    }
});