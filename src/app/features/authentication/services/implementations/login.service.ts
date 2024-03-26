import { Injectable } from "@angular/core";
import { map, catchError, throwError } from "rxjs";
import { Config } from "src/app/configs/config";
import { Constants } from "src/app/shared/constant/constants";
import { ApiRouteEnum } from "src/app/shared/enums/api-route-enum";
import { LogInRequestPipe } from "src/app/shared/pipes/log-in-request.pipe";
import { ApiHttpService } from "src/app/shared/services/api-http.service";
import { LogInServices } from "../declarations/log-in-service";

@Injectable()
export class LoginService implements LogInServices{

    constructor(
        private apiHttpService: ApiHttpService,
        private config: Config,
        private logInRequestPipe: LogInRequestPipe
    ){}

    logIn(formData: any) {
        return this.apiHttpService
          .post(
            this.config.getApiUrl(ApiRouteEnum.LOG_IN_USER),
            this.logInRequestPipe.transform(formData)
          )
          .pipe(
            map((response: any) => {
              if (response != null) {
                sessionStorage.setItem(
                  Constants.TOKEN,
                  `${response.token}`
                );
                sessionStorage.setItem(
                  Constants.USER_ID,
                  Constants.ID
                );
              }
              return response;
            }),
            catchError((error) => throwError(() => error.error))
          );
      }

      getAccessToken(): string | null {
        return sessionStorage.getItem(Constants.TOKEN);
      }
    
}