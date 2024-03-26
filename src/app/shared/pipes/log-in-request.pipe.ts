import {Pipe, PipeTransform} from '@angular/core';
import { LogInRequest } from '../models/request/log-in-request';

@Pipe({
  name: 'logInRequest',
})
export class LogInRequestPipe implements PipeTransform {
  transform(formData: any) {
    const logInRequest = new LogInRequest();
    logInRequest.email = formData.email;
    logInRequest.password = formData.password;
    return logInRequest;
  }
}
