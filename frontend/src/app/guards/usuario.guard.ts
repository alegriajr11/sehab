import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  
  realRol: string;

  constructor(
    private tokenService: TokenService,
    private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;

      const expectedRol = next.data['expectedRol'];
      this.realRol = this.tokenService.isAdmin() ? 'admin' : this.tokenService.IsSic() ? 'sic' : this.tokenService.IsPamec() ? 'pamec' : this.tokenService.IsSp() ? 'sp' : '';
      if(!this.tokenService.isLogged || expectedRol.indexOf(this.realRol) < 0){
        this.router.navigate(['/']);
        return false
      }

      return this.checkUserLogin(next, url);
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
      if (this.tokenService.isLogged()) {
        const userRole = this.tokenService.getRole();
        if (route.data['role'] && route.data['role'].indexOf(userRole) < 0) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
  
      this.router.navigate(['/']);
      return false;
    }
}
