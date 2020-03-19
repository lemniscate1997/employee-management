import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/services/authentication.service';
import { isNull, isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (!isNull(token) && !isUndefined(token)) {
      return true;
    }
    else {
      window.alert("login first!!!!");
      this.router.navigate(['/login'])
      return false;
    }
  }
}
