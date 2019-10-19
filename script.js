var ctx = document.getElementById('myChart').getContext('2d');
dataLabels = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'1',
	'2'
];
var chart = new Chart(ctx, {
	type: 'bar',

	data: {
		labels: dataLabels,
		datasets: [
			{
				label: 'September 2019',
				data: [ 10, 22, 33, 44, 55, 66 ],
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)'
			}
		]
	},

	options: {
		legend: {
			display: true
		},

		gridLines: {
			drawOnChartArea: true // only want the grid lines for one axis to show up
		},

		scales: {
			yAxes: [
				{
					ticks: {
						reverse: false,
						display: false
					},
					gridLines: {
						display: false
					}
				}
			],
			xAxes: [
				{
					ticks: {
						reverse: false,
						display: true
					}
				}
			],
			xAxes: [
				{
					display: true,
					position: 'top',
					id: 'x-axis-1'
				}
			],
			responsive: true,
			maintainAspectRatio: true
		}
	}
});
