import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdClientComponent } from './upd-client.component';

describe('UpdClientComponent', () => {
  let component: UpdClientComponent;
  let fixture: ComponentFixture<UpdClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdClientComponent]
    });
    fixture = TestBed.createComponent(UpdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
