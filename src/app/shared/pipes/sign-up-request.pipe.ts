import {Pipe, PipeTransform} from '@angular/core';
import { SignUpRequest } from '../models/request/sign-up-request';

@Pipe({
  name: 'signupRequest',
})
export class SignupRequestPipe implements PipeTransform {
  transform(formData: any) {
    const signUpRequest = new SignUpRequest();
    signUpRequest.email = formData.email;
    signUpRequest.password = formData.password;
    return signUpRequest;
  }
}
