import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './services/role.service';

@Injectable({
  providedIn: 'root'
})
export class AccessRoleGuard implements CanActivateChild {
  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.roleService.role === 'admin') {
      return true
    } else {
      return this.router.navigateByUrl('/error')
    }
  }
}
