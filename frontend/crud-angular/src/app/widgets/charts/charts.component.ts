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
  chartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['numberOfIds'] && !changes['numberOfIds'].firstChange) ||
        (changes['numberOfTaskIds'] && !changes['numberOfTaskIds'].firstChange)) {
      this.updateChartOptions();
    }
  }

  private updateChartOptions(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Number of IDs',
          data: [this.numberOfIds],  // Dados para a primeira linha
          type: 'line'
        },
        {
          name: 'Number of Task IDs',
          data: [this.numberOfTaskIds],  // Dados para a segunda linha
          type: 'line'
        }
      ]
    };
  }
}
