import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  work: string = '';

  @Output() addEvent = new EventEmitter<string>();
  add() {
    this.addEvent.emit(this.work);
    this.work = '';
  }
}
