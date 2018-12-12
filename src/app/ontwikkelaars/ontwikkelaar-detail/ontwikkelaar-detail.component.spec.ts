import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwikkelaarDetailComponent } from './ontwikkelaar-detail.component';

describe('OntwikkelaarDetailComponent', () => {
  let component: OntwikkelaarDetailComponent;
  let fixture: ComponentFixture<OntwikkelaarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntwikkelaarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntwikkelaarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
