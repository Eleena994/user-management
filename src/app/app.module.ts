import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { ApiHttpService } from './shared/services/api-http.service';
import { Config } from './configs/config';
import { UsersListComponent } from './features/dashboard/users-list/users-list.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { UserService } from './features/dashboard/services/user.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: ApiHttpService },
    { provide: Config },
    { provide: NZ_I18N, useValue: en_US },
    AdminGuard,
    { provide: UserService }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
