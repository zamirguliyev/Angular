import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  @Input() todos:string[] = []
}
