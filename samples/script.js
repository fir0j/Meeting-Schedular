// draws mixed chart
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<canvas id="creditSat"></canvas>
*/
var chartDefault = {
	type: 'bar',
	data: {
		labels: [ '30', '45', '60', '90', '120', '120+' ],
		datasets: [
			{
				type: 'bar',
				label: 'Receivable',
				data: [ 730, 492.5, 120, 4732.5, 2760.85, 0 ],
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			},
			{
				type: 'bar',
				label: 'Past Due',
				data: [ 2760.85, 0, 0, 0, 0, 0 ],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1
			},
			{
				type: 'scatter',
				label: 'Invoice',
				data: [
					{ x: 106, y: 177.7 },
					{ x: 101, y: 1 },
					{ x: 92, y: 1 },
					{ x: 88, y: 120 },
					{ x: 65, y: 4 },
					{ x: 66, y: 120 },
					{ x: 59, y: 120 },
					{ x: 36, y: 372.5 },
					{ x: 35, y: 120 },
					{ x: 29, y: 120 },
					{ x: 4, y: 185 },
					{ x: 4, y: 120 },
					{ x: 1, y: 240 },
					{ x: 1, y: 65 }
				],
				xAxisID: 'invoice-time',
				yAxisID: 'invoice-amount',
				backgroundColor: 'rgba(75, 00, 150, 0.2)',
				borderColor: 'rgba(75, 00, 150,1)',
				borderWidth: 2
			}
		]
	},
	options: {
		scales: {
			xAxes: [
				{
					display: true,
					stacked: true,
					scaleLabel: {
						display: true,
						labelString: 'Days'
					}
				},
				{
					id: 'invoice-time',
					type: 'linear',
					display: false,
					stacked: false,
					scaleLabel: {
						display: false,
						labelString: 'Days'
					},
					ticks: {
						beginAtZero: true,
						stepSize: 1,
						suggestedMax: 125
					}
				}
			],
			yAxes: [
				{
					display: true,
					stacked: true,
					scaleLabel: {
						display: true,
						labelString: 'Dollar Amount'
					},
					ticks: {
						beginAtZero: true
					}
				},
				{
					id: 'invoice-amount',
					display: false,
					stacked: false,
					scaleLabel: {
						display: false,
						labelString: 'Dollar Amount'
					},
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	}
};
var chart = new Chart($('#creditSat'), chartDefault);
