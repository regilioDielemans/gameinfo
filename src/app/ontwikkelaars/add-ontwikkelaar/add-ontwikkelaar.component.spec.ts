import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOntwikkelaarComponent } from './add-ontwikkelaar.component';

describe('AddOntwikkelaarComponent', () => {
  let component: AddOntwikkelaarComponent;
  let fixture: ComponentFixture<AddOntwikkelaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOntwikkelaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOntwikkelaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
