import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() selectedCoinData: any;
  public chartData = [];
  public chartDates = [];
  public formattedChartData = [];
  public monthNames: Array<string> = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {
    title: {
      text: 'Current Coin',
    },
    chart: {
      backgroundColor: '#333',
      borderRadius: 5,
      borderColor: '#1c1c1c',
    },
    yAxis: {
      title: {
        text: 'Price',
        style: {
          color: '#00f2ff',
        },
      },
      labels: {
        style: {
          color: '#00f2ff',
        },
        formatter: function () {
          return '$' + Highcharts.numberFormat(this.value, 2, '.', ',');
        },
      },
    },
    xAxis: {
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      formatter: function () {
        return (
          `<b>Time</b>: ${this.key}<br/>` +
          '<b>Value: </b>' +
          '$' +
          Highcharts.numberFormat(this.y, 8, '.', ',')
        );
      },
    },
    legend: {
      title: {
        text: 'Time (Last 24 Hours)',
        style: {
          color: '#00f2ff',
        },
      },
    },
    series: [
      {
        type: 'line',
        data: this.chartData,
      },
    ],
  };
  updateChart: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.selectedCoinData !== undefined) {
      if (this.selectedCoinData.history !== undefined) {
        this.chartData = [
          ...this.selectedCoinData.history.slice(2).map(Number),
        ];
        this.chartDates = this.chartData.map((el, i) => {
          const hour = new Date().getHours() - (24 - i);
          const date = new Date();
          date.setHours(hour);
          return `${this.monthNames[date.getMonth()]},${date.getDate()} @ ${
            date.getHours() === 0 ? 'midnight' : date.getHours() + ':00'
          }`;
        });
        this.formattedChartData = this.chartDates.map((e, i) => {
          return { name: e, y: this.chartData[i] };
        });
        console.log(this.formattedChartData);
        this.chartOptions.title = {
          text: this.selectedCoinData.name,
        };
        this.chartOptions.series = [
          {
            type: 'line',
            data: this.formattedChartData,
          },
        ];
        this.updateChart = true;
      }
    }
  }
}
