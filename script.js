// url = 'https://jsonplaceholder.typicode.com/todos/1';
url = 'https://totalcloud-static.s3.amazonaws.com/intern.json';
var getInterData = (url) => {
	let xhr = new XMLHttpRequest();
	method = 'GET';
	xhr.responseType = 'json';
	xhr.open(method, url, true);
	xhr.send();

	xhr.onerror = () => {
		alert('Network Error or CORS issue encountered');
	};

	xhr.onload = () => {
		internJSONdata = JSON.stringify(xhr.response);
		alert(internJSONdata);
	};
};
// getInterData(url);

let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');
let busyDays = [];

let horizonalLinePlugin = {
	afterDraw: function(chartInstance) {
		let xScale = chartInstance.scales['x-axis-0'];
		// var yScale = chartInstance.scales['y-axis-0'];
		let canvas = chartInstance.chart;
		let ctx = canvas.ctx;
		let index;
		let line;
		let style;
		let startValue;
		let endValue;
		let position = 55;

		//accessing options
		if (chartInstance.options.horizontalLine) {
			for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
				line = chartInstance.options.horizontalLine[index];

				//using id to generate position for allotment
				let id = line.id;
				function updatePostion(id, index) {
					if (id == index + 1) {
						position += 25;
					}
				}
				updatePostion(id, index);

				let start = line.start.toString();
				function getStart() {
					start = Number(start.slice(0, 2));
				}
				getStart();

				let end = line.end.toString();
				function getEnd() {
					end = Number(end.slice(0, 2));
				}
				getEnd();

				for (let i = start; i <= end; i++) {
					busyDays.push(i);
				}

				//debug it
				allUniqueDays = [];
				function uniqueBusyDays() {
					var uniqueBusyDays = [];
					for (let i = 0; i < days.length; i++) {
						if (uniqueBusyDays.indexOf(busyDays[i]) === -1) {
							uniqueBusyDays.push(busyDays[i]);
						}
					}
					return uniqueBusyDays;
				}
				allUniqueDays = uniqueBusyDays();
				//needs debug

				function availableDays() {
					let availableDays = [];
					for (let i = 1; i <= 30; i++) {
						if (allUniqueDays.indexOf(i) == -1) {
							availableDays.push(i);
						}
					}
					return availableDays;
				}

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
			data: []
		}
	]
};

var myChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
		//using hardcoded internJSONdata because CORS is not installed on your server
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

allotedDays = () => {
	totalInterns = myChart.options.horizontalLine.length;
	allotedDays = [];
	for (i = 0; i < totalInterns; i++) {
		startDay = Number(myChart.options.horizontalLine[i].start.slice(0, 2));
		endDay = Number(myChart.options.horizontalLine[i].end.slice(0, 2));
		for (j = startDay; j <= endDay; j++) {
			allotedDays.push(j);
		}
	}
	console.log(allotedDays.sort());
	removeDulicates = () => {
		noDuplicates = [];
		for (i = 0; i < allotedDays.length; i++) {
			if (noDuplicates.indexOf(allotedDays[i]) === -1) noDuplicates.push(allotedDays[i]);
		}
		allotedDays = noDuplicates;
	};
	removeDulicates();
	console.log('no duplicates' + allotedDays.sort());
	return allotedDays;
};

availableDays = () => {
	availability = [];
	let ad = allotedDays();
	for (i = 1; i < 30; i++) {
		if (ad.indexOf(i) === -1) {
			availability.push(i);
		}
	}
	return availability;
};

// console.log(availableDays());

function addData(myChart, vacantDays) {
	myChart.data.datasets.forEach((dataset) => {
		temp = [];
		for (i = 0; i < 31; i++) {
			temp.push(0);
		}
		//inserting element at specific index
		for (i = 0; i < vacantDays.length; i++) {
			temp.splice(vacantDays[i] - 1, 0, 30);
		}
		dataset.data = temp;
		console.log(temp);
	});
	myChart.update();
}
addData(myChart, availableDays());
