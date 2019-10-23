//Build the chart
(function() {
	var data = {
		labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'augugst' ],
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1,
				data: [
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
				]
			}
		]
	};

	//Load Chart
	var ctx = $('#myChart');
	var myBarChart = new Chart(ctx, {
		type: 'horizontalBar',
		data: data,
		options: {
			//Set the index of the value where you want to draw the line
			lineAtIndex: 14,
			legend: {
				display: false
			}
		}
	});
})();
