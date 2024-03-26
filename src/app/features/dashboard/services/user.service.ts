import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError, throwError, Observable } from "rxjs";
import { Config } from "src/app/configs/config";
import { Constants } from "src/app/shared/constant/constants";
import { ApiRouteEnum } from "src/app/shared/enums/api-route-enum";
import { UserListResponse } from "src/app/shared/models/response/user-list-response";
import { ApiHttpService } from "src/app/shared/services/api-http.service";

@Injectable()
export class UserService {
    constructor(
        private apiHttpService: ApiHttpService,
        private config: Config,
    ){}

  fetchUserList(page: number):Observable<any> {
    let params = new HttpParams();
    params = params.set('page', page);
    return this.apiHttpService
      .get(this.config.getApiUrl(ApiRouteEnum.FETCH_USER_LIST), {
        params, 
      })
      .pipe(
        map((response: any) => {
          if (response.data !== null) {
            console.log(`response`, response);
            return (
              response.data as UserListResponse[]
            );
          }
          return undefined;
        }),
        catchError((error) => throwError(() => error.error))
      );
  }

  approveUser(userId: number){
    return this.apiHttpService
      .get(this.config.getApiUrl(ApiRouteEnum.FETCH_USER_LIST).concat(`/${userId}`))
      .pipe(
        map((response: any) => {
          if (response.data !== null) {
            return response.data;
          }
          return undefined;
        }),
        catchError((error) => throwError(() => error.error))
      );
  }

  isAdmin(userId:number): boolean {
    const user = sessionStorage.getItem(Constants.USER_ID) || 0;
    return userId.toString() === user;//false
    //return user.role === 'admin';
  }

  updateUser(userId: number, formGroup: any): Observable<any> {
    return this.apiHttpService
      .put(this.config.getApiUrl(ApiRouteEnum.UPDATE_USER).concat(`/${userId}`), formGroup)
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          }
          return response;
        }),
        catchError((error) => throwError(() => error.error))
      );
  }

  deleteUser(userId: number): Observable<any> {
    return this.apiHttpService
      .delete(this.config.getApiUrl(ApiRouteEnum.DELETE_USER).concat(`/${userId}`))
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          }
          return response;
        }),
        catchError((error) => throwError(() => error.error))
      );
  }

}