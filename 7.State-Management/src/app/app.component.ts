import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, FormsModule, TodoListComponent,TodoAddComponent],
  template: `
    <h1>State Management</h1>
    <!-- Example 1 -->
    <!-- <p>Hi my name is <strong>{{name}}</strong> </p>
  <hr> -->
    <!-- <app-example [name]="name" (changeNameEvent)="changeName($event)"></app-example> -->

    <!-- Example 2 -->
    <!-- <input [(ngModel)]="work" />
    <button (click)="add()">Save</button>
    <hr />
    <app-todo-list [todos] ="todos"></app-todo-list> -->


    <!-- Example 3 -->
<app-todo-add (addEvent)="add($event)"></app-todo-add>
<hr>

<ul>
  <!-- <li *ngFor="let todo of todos">
    {{todo}}
  </li> -->
  @for (t of todos; track t) {
        <li>{{t}}</li>
    }
</ul>

  `,
})
export class AppComponent {
  name: string = 'Zamir';

  changeName(event: string) {
    this.name = event;
  }

  // work: string = '';
  // todos: string[] = [];

  // add(){
  //   this.todos.push(this.work)
  //   this.work = ''
  // }

 todos: string[] = [];

 add(event:string){
  this.todos.push(event)
 }

}
