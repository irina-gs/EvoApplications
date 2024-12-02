import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, take } from 'rxjs';
import { Role } from '../enum/role.enum';
import { UserState } from '../state/user.state';

@Injectable({
  providedIn: 'root'
})
export class AccessUserRoleGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(UserState.getRole).pipe(
      take(1),
      map((value) => {
        if (value === Role.Guest) {
          this.router.navigateByUrl('/error-access-denied')
          return false
        }
        return true
      })
    )
  }
}
