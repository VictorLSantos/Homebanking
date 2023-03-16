import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() btnText!: string;
  formLogin!: FormGroup;
  invalidLogin: boolean = false;

  ngOnInit(): void {}

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: LoginserviceService
  ) {
    // Validations

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  postdata(formLogin: any) {
    this.apiService
      .userLogin(formLogin.value.email, formLogin.value.password)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if (data.message == 'sucess') {
            this.router.navigate(['']);
          } else if (data.message == 'empty') {
            alert('You need to fill in the fields');
          } else if (data.message == 'failed') {
            alert('Incorrect Username or Email');
          }
        },
        error: (error) => {},
      });
  }
}
