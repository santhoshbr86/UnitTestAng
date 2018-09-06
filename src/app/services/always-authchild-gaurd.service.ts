import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
// export class AlwaysAuthchildGaurdService implements CanActivateChild  {

//   constructor() { }
//   CanActivateChild(): boolean {
//     console.log('Always auth child gaurd');
//     return true;
//   }
// }


export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild() {
    console.log('AlwaysAuthChildrenGuard');
    return true;
  }
}