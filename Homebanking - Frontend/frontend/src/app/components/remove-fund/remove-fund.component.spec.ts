import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFundComponent } from './remove-fund.component';

describe('RemoveFundComponent', () => {
  let component: RemoveFundComponent;
  let fixture: ComponentFixture<RemoveFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
