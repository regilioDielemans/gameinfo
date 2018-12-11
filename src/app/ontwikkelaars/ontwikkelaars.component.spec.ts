import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwikkelaarsComponent } from './ontwikkelaars.component';

describe('OntwikkelaarsComponent', () => {
  let component: OntwikkelaarsComponent;
  let fixture: ComponentFixture<OntwikkelaarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntwikkelaarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntwikkelaarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
