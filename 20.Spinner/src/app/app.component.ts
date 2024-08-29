import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerModule,CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private _spinner:NgxSpinnerService,
    private _http:HttpClient
  ){}



  callSpin(){
    this._spinner.show()
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next:(res)=>{
        this._spinner.hide()
        console.log(res)
      },
      error:(err)=>{
        this._spinner.hide()
        console.log(err)
      }
    })
  }
}
