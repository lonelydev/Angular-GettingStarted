import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }
  /**
   * CanActivate determines if the route can be activated.
   * there is also a CanDeactivate.
   * @param route
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert(`Invalid product id`);
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
