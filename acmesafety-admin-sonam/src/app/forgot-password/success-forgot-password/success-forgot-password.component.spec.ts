import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessForgotPasswordComponent } from './success-forgot-password.component';

describe('SuccessForgotPasswordComponent', () => {
  let component: SuccessForgotPasswordComponent;
  let fixture: ComponentFixture<SuccessForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
