import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  template:`
    <h3>{{count()}}</h3>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <hr>

    <ul>
      <li *ngFor="let r of results()">
        {{r}}
      </li>
    </ul>
  `
})
export class AppComponent {

  count = signal(0) 
  results = signal<string[]>([])

  increment(){
    this.count.update((oldValue)=>oldValue + 1)
    this.results.update((oldValue)=>[...oldValue,'increment'])
  }

  decrement(){
    this.count.update((oldValue)=>oldValue -1)
    this.results.update((oldValue)=>[...oldValue,'decrement'])
  }
}
