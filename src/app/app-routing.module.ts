import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './features/dashboard/users-list/users-list.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { SingupComponent } from './features/authentication/components/singup/singup.component';
import { LoginComponent } from './features/authentication/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-list',
    component: UsersListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'sign-up',
    component: SingupComponent,
  },
  {
    path: '',
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
