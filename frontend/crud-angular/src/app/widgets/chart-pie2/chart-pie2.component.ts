import { Component ,Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts'; // Importe os tipos Color e LegendPosition
import { single } from './single';

@Component({
  selector: 'app-chart-pie2',
  templateUrl: './chart-pie2.component.html',
  styleUrls: ['./chart-pie2.component.scss']
})
export class ChartPie2Component implements OnInit{
  @Input() numberOfIds: number = 0;
  @Input() numberOfTaskIds: number = 0;
  @Input() numberOfIdsActive: number = 0;
  @Input() numberOfActiveIds: number = 0;
  @Input() numberOfInactiveActiveIds: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numberOfIds'] && !changes['numberOfIds'].firstChange) {
      this.updateSingleArray();
    }
    if (changes['numberOfTaskIds'] && !changes['numberOfTaskIds'].firstChange) {
      this.updateSingleArray();
    }
    if (changes['numberOfIdsActive'] && !changes['numberOfIdsActive'].firstChange) {
      this.updateSingleArray();
    }
    if (changes['numberOfActiveIds'] && !changes['numberOfActiveIds'].firstChange) {
      this.updateSingleArray();
    }
    if (changes['numberOfInactiveActiveIds'] && !changes['numberOfInactiveActiveIds'].firstChange) {
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
        "name": "Total de Clientes Ativos",
        "value": this.numberOfActiveIds
      },
      {
        "name":"Total de Tarefas Ativas",
        "value":this.numberOfIdsActive
      },
      {
        "name":"Total de Clientes Inativos",
        "value":this.numberOfInactiveActiveIds
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
