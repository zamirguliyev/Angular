import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoPipe } from './todo.pipe';
import { ChangeNamePipe } from './change-name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TodoPipe,ChangeNamePipe],
  template: `
  <h1>5.Pipe</h1>
 <div>
  <h3>{{name | changeName}}</h3>

 <input [(ngModel)]="work" >
 <button (click)="save()">Save</button>
 </div>

 <div>
  <input type="search" [(ngModel)]="search" placeholder="Search...">
  <ul>
    @for (item of todos | todo:search; track item) {
      <li>{{item}}</li>
    }
  </ul>
 </div>
  `,
})
export class AppComponent {
  work:string = '';
  todos: string[] = ['Banana','Apple','Kiwi']
  search:string =''
  name:string = 'Zamir Guliyev'

  save(){
    this.todos.push(this.work)
    this.work = ''
  }
  
}
