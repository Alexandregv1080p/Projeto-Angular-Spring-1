import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent {
	Highcharts: typeof Highcharts = Highcharts;
	updateFlag = false;
  
	data = [1, 2, 3, 4];
  
	chartOptions: Highcharts.Options = {
		{
			colors: ['#01BAF2', '#f6fa4b', '#FAA74B', '#baf201', '#f201ba'],
			chart: {
			type: 'pie'
			},
			title: {
			text: 'Egg Yolk Composition'
			},
			tooltip: {
			valueSuffix: '%'
			},
			subtitle: {
			text:
			'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
			},
			plotOptions: {
			pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
			enabled: true,
			format: '{point.name}: {point.percentage:.1f}%'
			},
			showInLegend: true
			}
			},
			series: [
			{
			name: 'Percentage',
			colorByPoint: true,
			data: [
			{
			name: 'Water',
			y: 55.02
			},
			{
			name: 'Fat',
			sliced: true,
			selected: true,
			y: 26.71
			},
			{
			name: 'Carbohydrates',
			y: 1.09
			},
			{
			name: 'Protein',
			y: 15.5
			},
			{
			name: 'Ash',
			y: 1.68
			}
			]
			}
			]
	};

