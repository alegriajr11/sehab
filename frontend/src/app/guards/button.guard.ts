import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ButtonGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('boton-acta-sic') === 'true') {
            return true;
        }if (localStorage.getItem('boton-acta-sp-ips') === 'true') {
            return true;
        }if (localStorage.getItem('boton-acta-sp-ind') === 'true') {
            return true;
        }
        if (localStorage.getItem('boton-acta-pamec') === 'true') {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}