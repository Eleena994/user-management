import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { RouterModule } from '@angular/router';
import { Authroutes } from './authentication.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { LoginService } from './services/implementations/login.service';

import { LogInRequestPipe } from 'src/app/shared/pipes/log-in-request.pipe';
import { LogInServices } from './services/declarations/log-in-service';
import { AuthService } from './services/implementations/auth.service';
import { SignupRequestPipe } from 'src/app/shared/pipes/sign-up-request.pipe';
import { SignUpServices } from './services/declarations/sign-up-service';
import { SignupService } from './services/implementations/signup.service';

@NgModule({
  declarations: [
    SingupComponent,
    LoginComponent,
    LogInRequestPipe,
    SignupRequestPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Authroutes),
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    // COMPONENTS
    SingupComponent,
    LoginComponent,
    // PIPES
    LogInRequestPipe,
    SignupRequestPipe
  ],
  providers: [
    {provide: LogInRequestPipe},
    {provide: SignupRequestPipe},
    {provide: AuthService},
    {provide: LogInServices, useClass: LoginService},
    {provide: SignUpServices, useClass: SignupService},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthenticationModule { }
