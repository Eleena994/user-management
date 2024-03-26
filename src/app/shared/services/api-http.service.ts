import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiHttpService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string, options?: any) {
    return this.httpClient.get(url, options);
  }

  public post(url: string, payload?: any, options?: any) {
    return this.httpClient.post(url, payload, options);
  }

  public put(url: string, payload?: any, options?: any) {
    return this.httpClient.put(url, payload, options);
  }

  public delete(url: string, options?: any) {
    return this.httpClient.delete(url, options);
  }

}
