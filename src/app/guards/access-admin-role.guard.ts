import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, take } from 'rxjs';
import { UserState } from '../state/user.state';
import { Role } from '../enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminRoleGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(UserState.getRole).pipe(
      take(1),
      map((value) => {
        if (value === Role.Admin) {
          return true
        } else {
          this.router.navigateByUrl('/error-access-denied')
          return false
        }
      })
    )
  }

}
