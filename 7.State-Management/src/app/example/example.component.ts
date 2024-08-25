import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @Input() name: string = '';

  @Output() changeNameEvent = new EventEmitter<string>()

  changeName(){
    this.changeNameEvent.emit(this.name)
  }
}
