import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallListComponent } from './overall-list.component';

describe('OverallListComponent', () => {
  let component: OverallListComponent;
  let fixture: ComponentFixture<OverallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
