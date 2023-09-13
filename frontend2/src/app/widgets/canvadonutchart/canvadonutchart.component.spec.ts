import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvadonutchartComponent } from './canvadonutchart.component';

describe('CanvadonutchartComponent', () => {
  let component: CanvadonutchartComponent;
  let fixture: ComponentFixture<CanvadonutchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvadonutchartComponent]
    });
    fixture = TestBed.createComponent(CanvadonutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
