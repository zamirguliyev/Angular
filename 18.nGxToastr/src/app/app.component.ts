import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private _toastr :ToastrService
  ){

  }

  callToastr(){
    this._toastr.success('Zamir Test', 'Test')
  }
}
