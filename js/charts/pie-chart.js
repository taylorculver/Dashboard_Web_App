var ctx = document.getElementById('pieChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#74B1BE', '#82C98F', '#7476C0'],
            // borderColor: '#4D4D73',
            borderWidth: 0,
            data: [13, 17, 70],
        }]
    },

    // Configuration options go here
    options: {
        layout: {
            padding: {
                left: 30,
                right: 100,
                top: 30,
                bottom: 30
            }
        },
        legend: {
            position: 'right',
            labels: {
            	boxWidth: 15,
            	padding: 20,
            }
        },
        maintainAspectRatio: false,
        responsive: true,
    }    
	});