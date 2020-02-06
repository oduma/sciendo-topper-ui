import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfLovedComponent } from './no-of-loved.component';

describe('NoOfLovedComponent', () => {
  let component: NoOfLovedComponent;
  let fixture: ComponentFixture<NoOfLovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfLovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfLovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
