import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { LogInServices } from '../../services/declarations/log-in-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  size: NzButtonSize = 'large';
  hideBanner: boolean = false;
  errorText!: string | null;
  
  constructor(
    private fb: FormBuilder,
    private loginServices: LogInServices,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null),
    });
  }

  submitForm(){
    console.log("form value", this.loginForm.value);
    if (this.loginForm.valid) {
      this.signIn();
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  signIn(): void {
    this.hideBanner = false;
    this.loginServices.logIn(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log("logIn response", response);
        this.router.navigate(["/user-list"]);
      },
      error: (error: any) => {
        this.hideBanner = true;
        this.errorText = error.error;
        setTimeout(()=>{
          this.router.navigate(["/sign-up"]);
         },2000
        )},
    });
  }

}
