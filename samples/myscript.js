var ctx = document.getElementById('myChart').getContext('2d');
function hoursEarlier(hours) {
	return moment().subtract(hours, 'h').toDate();
}
var speedData = {
	labels: [
		hoursEarlier(10),
		hoursEarlier(9.4),
		hoursEarlier(8),
		hoursEarlier(7),
		hoursEarlier(6),
		hoursEarlier(5),
		hoursEarlier(4)
	],
	datasets: [
		{
			label: 'Car Speed',
			data: [ 0, 59, 75, 20, 20, 55, 40 ],
			lineTension: 0.25,
			fill: false,
			borderColor: 'orange',
			backgroundColor: 'transparent',
			pointBorderColor: 'orange',
			pointBackgroundColor: 'rgba(255,150,0,0.5)',
			borderDash: [ 5, 5 ],
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHitRadius: 30,
			pointBorderWidth: 2,
			pointStyle: 'rectRounded'
		}
	]
};

var chartOptions = {
	legend: {
		display: true,
		position: 'top',
		labels: {
			boxWidth: 80,
			fontColor: 'black'
		}
	},
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					unit: 'hour',
					unitStepSize: 0.5,
					round: 'hour',
					tooltipFormat: 'h:mm:ss a',
					displayFormats: {
						hour: 'MMM D, h:mm A'
					}
				}
			}
		],
		yAxes: [
			{
				gridLines: {
					color: 'black',
					borderDash: [ 2, 5 ]
				},
				scaleLabel: {
					display: true,
					labelString: 'Speed in Miles per Hour',
					fontColor: 'green'
				}
			}
		]
	}
};
days = [
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
	'31',
	'1',
	'2'
];

internsName = [
	'Shubham',
	'Vivek',
	'Priya',
	'Rohan',
	'Swati',
	'Praksh',
	'Abhishek',
	'Pradeep',
	'Suhas',
	'Bishnu',
	'Neha'
];

colors = [
	'rgba(255, 99, 132, 0.2)',
	'rgba(54, 162, 235, 0.2)',
	'rgba(255, 206, 86, 0.2)',
	'rgba(75, 255, 192, 0.2)',
	'rgba(153, 102, 255, 0.2)',
	'rgba(153, 102, 255, 0.2)',
	'rgba(133, 102, 255, 0.2)',
	'rgba(123, 102, 255, 0.2)',
	'rgba(113, 102, 255, 0.2)',
	'rgba(153, 1, 255, 0.2)',
	'rgba(255, 159, 64, 0.2)'
];
var myOptions = {
	legend: {
		labels: {
			boxWidth: 0
		}
	},

	scales: {
		yAxes: [
			{
				ticks: {
					reverse: false,
					display: true
				},
				gridLines: {
					display: false
				},
				id: 'y-axis-labels'
			}
		],
		xAxes: [
			{
				ticks: {
					reverse: false,
					display: true
				},
				position: 'top',
				labels: days
			}
		]
	},
	responsive: true,
	maintainAspectRatio: true
};

var chart = new Chart(ctx, {
	type: 'bar',
	data: {
		datasets: [
			{
				label: 'firoj',
				data: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
			},
			{
				label: 'shubham',
				data: [ 30, 3, 5, 3, 3, 8 ],
				backgroundColor: colors
			}
		]
	},
	options: myOptions
});
