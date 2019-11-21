import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySituationComponent } from './daily-situation.component';

describe('DailySituationComponent', () => {
  let component: DailySituationComponent;
  let fixture: ComponentFixture<DailySituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
