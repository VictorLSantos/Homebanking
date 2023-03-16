import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFundComponent } from './deposit-fund.component';

describe('DepositFundComponent', () => {
  let component: DepositFundComponent;
  let fixture: ComponentFixture<DepositFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
