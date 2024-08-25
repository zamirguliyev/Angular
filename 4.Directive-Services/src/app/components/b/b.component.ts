import { Component, inject } from '@angular/core';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  //ruler 1

 ex = inject(ExampleService)
  


  //ruler 2 (main)
  
  // constructor(public ex:ExampleService){ }
}
