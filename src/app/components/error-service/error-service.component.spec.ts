import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorServiceComponent } from './error-service.component';

describe('ErrorServiceComponent', () => {
  let component: ErrorServiceComponent;
  let fixture: ComponentFixture<ErrorServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
