var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var horizonalLinePlugin = {
	afterDraw: function(chartInstance) {
		var xScale = chartInstance.scales['x-axis-0'];
		var yScale = chartInstance.scales['y-axis-0'];
		var canvas = chartInstance.chart;
		var ctx = canvas.ctx;
		var index;
		var line;
		var style;
		var startValue;
		var endValue;

		//accessing options
		if (chartInstance.options.horizontalLine) {
			for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
				line = chartInstance.options.horizontalLine[index];

				if (!line.style) {
					style = 'rgba(255,0,0, .6)';
				} else {
					style = line.style;
				}

				if (line.start) {
					startValue = xScale.getPixelForValue(line.start);
				} else {
					startValue = 0;
				}

				if (line.end) {
					endValue = xScale.getPixelForValue(line.end);
				} else {
					endValue = 0;
				}

				ctx.lineWidth = 20;

				if (startValue) {
					ctx.beginPath();
					ctx.moveTo(startValue, startValue);
					ctx.lineTo(endValue, startValue);
					ctx.strokeStyle = style;
					ctx.stroke();
				}

				if (line.text) {
					ctx.fillStyle = style;
					ctx.fillText(line.text, endValue, startValue + ctx.lineWidth);
				}
			}
			return;
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
			label: 'My First dataset',
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
			data: [ 0, 0, 0, 0, 0, 0, 5, 8 ]
		}
	]
};

var myChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
		horizontalLine: [
			{
				start: 8,
				end: 12,
				text: 'subham'
			},
			{
				start: 6,
				end: 9,
				text: 'firoj'
			},
			{
				start: 10,
				end: 20,
				text: 'neha'
			}
		],
		scales: {
			xAxes: [
				{
					position: 'top'
				}
			]
		}
	}
});
