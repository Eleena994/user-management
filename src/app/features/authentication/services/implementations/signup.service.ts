import { Injectable } from "@angular/core";
import { map, catchError, throwError } from "rxjs";
import { Config } from "src/app/configs/config";
import { Constants } from "src/app/shared/constant/constants";
import { ApiRouteEnum } from "src/app/shared/enums/api-route-enum";
import { LogInRequestPipe } from "src/app/shared/pipes/log-in-request.pipe";
import { ApiHttpService } from "src/app/shared/services/api-http.service";
import { SignUpServices } from "../declarations/sign-up-service";
import { SignupRequestPipe } from "src/app/shared/pipes/sign-up-request.pipe";

@Injectable()
export class SignupService implements SignUpServices{

    constructor(
        private apiHttpService: ApiHttpService,
        private config: Config,
        private signupRequestPipe: SignupRequestPipe
    ){}

    signUp(formData: any) {
        return this.apiHttpService
          .post(
            this.config.getApiUrl(ApiRouteEnum.SIGN_UP),
            this.signupRequestPipe.transform(formData)
          )
          .pipe(
            map((response: any) => {
              return response;
            }),
            catchError((error) => throwError(() => error.error))
          );
      }
    
}