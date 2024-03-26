import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { SignUpServices } from '../../services/declarations/sign-up-service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm!: FormGroup;
  size: NzButtonSize = 'large';
  
  constructor(
    private fb: FormBuilder,
    private signUpServices:SignUpServices,
  ) { }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup(): void {
    this.signupForm = this.fb.group({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(
        null,[Validators.required],
      ),
    });
  }

  submitForm(){
    console.log("form value", this.signupForm.value);
    if (this.signupForm.valid) {
      this.signUp();
    } else {
      Object.values(this.signupForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  signUp(): void {
    this.signUpServices.signUp(this.signupForm.value).subscribe({
      next: (response: any) => {
        console.log("logIn response", response);
        alert('user created successfully');
      },
      error: (error: any) => {
        alert(error.error);
      },
    });
  }

}
