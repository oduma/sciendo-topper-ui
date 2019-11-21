import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLauncherComponent } from './graph-launcher.component';

describe('GraphLauncherComponent', () => {
  let component: GraphLauncherComponent;
  let fixture: ComponentFixture<GraphLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
