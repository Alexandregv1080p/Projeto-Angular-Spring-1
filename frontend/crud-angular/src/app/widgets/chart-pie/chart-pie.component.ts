import { Component ,Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts'; // Importe os tipos Color e LegendPosition
import { single } from './single';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  @Input() numberOfIds: number = 0;
  @Input() numberOfTaskIds: number = 0;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['numberOfIds'] && !changes['numberOfIds'].firstChange) {
      this.updateSingleArray();
    }
    if (changes['numberOfTaskIds'] && !changes['numberOfTaskIds'].firstChange) {
      this.updateSingleArray();
    }
  }
  
  single: any[] = [];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = {
    name: 'custom-color-scheme',
    selectable: true,
    group: ScaleType.Ordinal, 
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    
  }
  ngOnInit(): void {
    this.updateSingleArray();
  }
  private updateSingleArray(): void {
    this.single = [
      {
        "name": "Total de Clientes",
        "value": this.numberOfIds
      },
      {
        "name":"Total de Tarefas",
        "value":this.numberOfTaskIds
      },
      {
        "name":"Total de Downloads",
        "value":3
      },
      {
        "name":"Total de Visitas",
        "value":2
      }
    ];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
