import { CanDeactivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const checkGuard: CanDeactivateFn<HomeComponent> = (component, currentRoute, currentState, nextState) => {
 
  let result = confirm("Are u exit?")
 
  return result;
};
