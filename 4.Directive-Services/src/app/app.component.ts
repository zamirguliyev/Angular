import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColorDirective } from './change-color.directive';
import { ValidInputDirective } from './valid-input.directive';
import { AComponent } from './components/a/a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChangeColorDirective,ValidInputDirective,AComponent],
  template: `
    <h1 changeColor="green" name="Zamir">Directive</h1>

    <form> 
      <input id="input" validInput type="text" required minlength="3" >
      <div></div>
      <button type="submit">Send</button>
    </form>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = '4.Directive';
}
