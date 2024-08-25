import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `

  <!-- GET METHOD -->
    <!-- <ul>
      @for (d of data; track d) {
      <li>{{ d.title }}</li>
      }
    </ul> -->


    <!-- POST METHOD  --> 
     <input [(ngModel)]="model.title">
    <button (click)="save()">Save</button>


  `,
})
export class AppComponent {
  //GET METHOD 
  //data: any;
  // constructor(private _http: HttpClient) {
  //   this._http
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .subscribe({
  //       next:(res:any)=>{
  //         this.data = res
  //       },
  //       error:(err:HttpErrorResponse)=>{
  //         console.log(err)
  //       }
  //     });
  // }

  //POST METHOD

  model: {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  } = {
      userId: 0,
      id: 0,
      title: 'salam',
      completed: false
    }

  // constructor(private _http: HttpClient) {
    // this._http.post("https://jsonplaceholder.typicode.com/todos", model).subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err)
    //   }
    // })
  // }
  // save() {
  //   this._http.post("https://jsonplaceholder.typicode.com/todos",this.model).subscribe(res=>{
  //     console.log(res)
  //   })
  // }


  //ADD SERVICE

  constructor(private _app:AppService){
    _app.get((res)=>{
      console.log(res)
    })
  }
  
  save(){
    this._app.add({userId:1,id:1,title:'Zamir',completed: false},(res)=>{
      console.log(res)
    })
  } 


}
