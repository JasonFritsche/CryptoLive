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
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {
    title: {
      text: 'Current Coin',
    },
    chart: {
      backgroundColor:"#333",
      borderRadius: 5,
      borderColor: "#1c1c1c",
    },
    yAxis: {
      title: {
        text: "Price"
      },
      labels: {
        style: {
          color: "#00f2ff"
        }
      }
    },
    legend: {
      title:{
        text: "Last 24 Hours"
      }
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

  ngOnInit(): void {
  }
  ngOnChanges() {
    if (this.selectedCoinData !== undefined) {
      if (this.selectedCoinData.history !== undefined) {
        this.chartData = [...this.selectedCoinData.history.map(Number)];
        this.chartOptions.title = {
          text: this.selectedCoinData.name,
        };
        this.chartOptions.series = [
          {
            type: 'line',
            data: this.chartData.slice(2),
          },
        ];
        this.updateChart = true;
      }
    }
  }
}
