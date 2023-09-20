import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnChanges {
  @Input() numberOfIds: number = 0;
  @Input() numberOfTaskIds: number = 0;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        name: 'Number of TaskIds',
        data: [0,this.numberOfTaskIds],  // Dados para a primeira linha
        type: 'line'
      },
      {
        name: 'Number of IDs',
        data: [0,this.numberOfIds],  // Dados para a primeira linha
        type: 'line'
      }
    ]
  };
  ngOnInit(): void {
    this.updateChartOptions();
  }
  ngOnChanges(changes: SimpleChanges) {
    if ((changes['numberOfIds'] && !changes['numberOfIds'].firstChange) ||
        (changes['numberOfTaskIds'] && !changes['numberOfTaskIds'].firstChange)) {
      this.updateChartOptions();
    }
  }
  constructor() {}

  private updateChartOptions(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Number of Tasks IDs',
          data: [0,this.numberOfTaskIds],  // Dados para a primeira linha
          type: 'line'
        },
        {
          name: 'Number of Clients IDs',
          data: [0,this.numberOfIds],  // Dados para a primeira linha
          type: 'line'
        }
      ]
    };
  }
}
