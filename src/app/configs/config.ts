import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Config {
  BACKEND_API_URL: string;

  constructor() {
    console.log(`BACKEND URL :: ${environment.BACKEND_API_URL}`);
    this.BACKEND_API_URL = environment.BACKEND_API_URL;
  }

  getBaseUrl() {
    return this.BACKEND_API_URL;
  }

  getApiUrl(apiRoute: string) {
    return this.BACKEND_API_URL.concat(apiRoute);
  }
}
