import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Movements } from 'src/app/movements';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-deposit-fund',
  templateUrl: './deposit-fund.component.html',
  styleUrls: ['./deposit-fund.component.css'],
})
export class DepositFundComponent {
  @Output() Submit = new EventEmitter<Movements>();

  @Input()
  btnText!: string;
  authentication: any;

  hide = true;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  addSubmit() {
    if (this.formDeposit.valid) {
      this.dataService
        .addDepositFund(this.formDeposit.value)
        .subscribe((res) => {
          this.sucessMsg = res.message;
          setTimeout(() => {
            this.router.navigate(['/movement_list']);
          }, 1000);
        });
    } else {
    }
  }

  ngOnInit(): void {
    this.addSubmit();

    this.formDeposit.valueChanges.subscribe((form) => {
      if (form.deposit) {
        this.formDeposit.patchValue(
          {
            deposit: this.currencyPipe.transform(
              form.deposit.replace(/\D/g, '').replace(/^0+/, ''),
              'EUR',
              'symbol',
              '1.0-0'
            ),
          },
          { emitEvent: false }
        );
      }
    });

    this.authentication = localStorage.getItem('token');
    if (this.authentication) {
      this.router.navigate(['deposit_fund']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  warningMsg: any;
  sucessMsg: any;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dataService: ApiserviceService,
    private currencyPipe: CurrencyPipe
  ) {}

  formDeposit = new FormGroup({
    name_fund: new FormControl('', Validators.required),
    deposit: new FormControl('', Validators.required),
  });

  get name_fund() {
    return this.formDeposit.get('name_fund')!;
  }

  get amount_fund() {
    return this.formDeposit.get('deposit')!;
  }
}
