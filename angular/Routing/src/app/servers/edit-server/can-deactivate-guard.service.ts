// import { Observable } from "rxjs/Observable";
// import { CanDeacti } from "@angular/core";

import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise <boolean> | boolean; 
    // {}
}
export class canDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        nextState?: RouterStateSnapshot) : Observable<boolean> | Promise <boolean> | boolean{
            return component.canDeactivate();
        }
}