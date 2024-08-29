import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  items:any[] = []

  constructor(
    private _http: HttpClient
  ) { }

  callApi() {
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next:(res:any)=>{
        this.items = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
