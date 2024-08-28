import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <h2>{{count()}}</h2>
    <h3>Computed Count {{countPlus()}}</h3>

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

  //computed , effect 

  countPlus = computed(() => this.count() + 1)
  changeCount = effect(()=> console.log(this.count() + " change"))

  //set,update 
  increment() {
    //update
    this.count.update((oldValue) => oldValue + 1)
    //set 
    // this.count.set(0)
    // this.count.set(this.count() + 1)

    this.results.update((oldValue) => [...oldValue, 'increment'])
  }

  decrement() {
    this.count.update((oldValue) => oldValue - 1)
    this.results.update((oldValue) => [...oldValue, 'decrement'])
  }
}
