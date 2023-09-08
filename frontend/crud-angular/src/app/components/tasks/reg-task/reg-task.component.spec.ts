import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTaskComponent } from './reg-task.component';

describe('RegTaskComponent', () => {
  let component: RegTaskComponent;
  let fixture: ComponentFixture<RegTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegTaskComponent]
    });
    fixture = TestBed.createComponent(RegTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
