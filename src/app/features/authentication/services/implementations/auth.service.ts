// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constant/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']); //TO do condition remove
  }

  getCurrentUser(): any {
    return sessionStorage.getItem(Constants.TOKEN) || 'null';
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(Constants.TOKEN);
  }

  isAdmin(): boolean {
    return sessionStorage.getItem(Constants.TOKEN) === null? false : true;
    
  }
}
