import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SingupComponent } from "./components/singup/singup.component";

export const Authroutes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'signup', component: SingupComponent }
]