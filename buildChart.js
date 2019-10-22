var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
var busyDays = [];

var horizonalLinePlugin = {
	afterDraw: function(chartInstance) {
		var xScale = chartInstance.scales['x-axis-0'];
		// var yScale = chartInstance.scales['y-axis-0'];
		var canvas = chartInstance.chart;
		var ctx = canvas.ctx;
		var index;
		var line;
		var style;
		var startValue;
		var endValue;
		var position = 55;

		//accessing options
		if (chartInstance.options.horizontalLine) {
			for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
				line = chartInstance.options.horizontalLine[index];

				//using id to generate position for allotment
				var id = line.id;
				function updatePostion(id, index) {
					if (id == index + 1) {
						position += 25;
					}
				}
				updatePostion(id, index);

				var start = line.start.toString();
				function getStart() {
					start = Number(start.slice(0, 2));
				}
				getStart();

				var end = line.end.toString();
				function getEnd() {
					end = Number(end.slice(0, 2));
				}
				getEnd();

				for (i = start; i <= end; i++) {
					busyDays.push(i);
				}

				//debug it
				allUniqueDays = [];
				function uniqueBusyDays() {
					var uniqueBusyDays = [];
					for (i = 0; i < days.length; i++) {
						if (uniqueBusyDays.indexOf(busyDays[i]) === -1) {
							uniqueBusyDays.push(busyDays[i]);
						}
					}
					return uniqueBusyDays;
				}
				allUniqueDays = uniqueBusyDays();
				console.log(allUniqueDays);
				//needs debug

				function availableDays() {
					var availableDays = [];
					for (i = 1; i <= 30; i++) {
						if (allUniqueDays.indexOf(i) == -1) {
							availableDays.push(i);
						}
					}
					return availableDays;
				}
				console.log(availableDays());

				availableDays();
				if (!line.style) {
					style = 'rgba(255,0,0, .6)';
				} else {
					style = line.style;
				}

				if (line.start) {
					startValue = xScale.getPixelForValue(start);
				} else {
					startValue = 0;
				}

				if (line.end) {
					endValue = xScale.getPixelForValue(end);
				} else {
					endValue = 0;
				}

				ctx.lineWidth = 10;

				if (true) {
					ctx.beginPath();
					ctx.moveTo(startValue, position);
					ctx.lineTo(endValue, position);
					ctx.strokeStyle = style;
					ctx.stroke();
				}

				if (line.name) {
					ctx.fillStyle = style;
					ctx.fillText(line.name, endValue, position + ctx.lineWidth);
				}
			}
		}
	}
};
Chart.pluginService.register(horizonalLinePlugin);

days = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	1,
	2
];

var data = {
	labels: days,
	datasets: [
		{
			label: 'September 2019',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [ 0, 0, 0, 0, 0, 0, 1 ]
		}
	]
};

var myChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
		horizontalLine: [
			{
				id: 1,
				name: 'Shubham',
				start: '01/09/2019',
				end: '07/09/2019'
			},
			{
				id: 2,
				name: 'Shubham',
				start: '26/09/2019',
				end: '28/09/2019'
			},
			{
				id: 3,
				name: 'Vivek',
				start: '09/09/2019',
				end: '12/09/2019'
			},
			{
				id: 4,
				name: 'Priya',
				start: '10/09/2019',
				end: '12/09/2019'
			},
			{
				id: 5,
				name: 'Rohan',
				start: '17/09/2019',
				end: '19/09/2019'
			},
			{
				id: 6,
				name: 'Rohan',
				start: '27/09/2019',
				end: '29/09/2019'
			},
			{
				id: 7,
				name: 'Swati',
				start: '13/09/2019',
				end: '14/09/2019'
			},
			{
				id: 8,
				name: 'Swati',
				start: '29/09/2019',
				end: '29/09/2019'
			},
			{
				id: 9,
				name: 'prakash',
				start: '03/09/2019',
				end: '07/09/2019'
			},
			{
				id: 10,
				name: 'abhishek',
				start: '11/09/2019',
				end: '11/09/2019'
			},
			{
				id: 11,
				name: 'Pradeep',
				start: '09/09/2019',
				end: '13/09/2019'
			},
			{
				id: 12,
				name: 'Pradeep',
				start: '28/09/2019',
				end: '28/09/2019'
			},
			{
				id: 13,
				name: 'suhas',
				start: '20/09/2019',
				end: '23/09/2019'
			},
			{
				id: 14,
				name: 'Vishnu',
				start: '25/09/2019',
				end: '27/09/2019'
			},
			{
				id: 15,
				name: 'neha',
				start: '25/09/2019',
				end: '28/09/2019'
			}
		],

		scales: {
			xAxes: [
				{
					position: 'top'
				}
			],
			yAxes: [
				{
					ticks: {
						display: false
					},
					gridLines: false
				}
			]
		}
	}
});

console.log(myChart.options.horizontalLine[0].id);
