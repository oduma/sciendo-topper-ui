import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallSituationComponent } from './overall-situation.component';

describe('OverallSituationComponent', () => {
  let component: OverallSituationComponent;
  let fixture: ComponentFixture<OverallSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
