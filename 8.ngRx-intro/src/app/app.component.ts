import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-my-counter></app-my-counter>

    <h1>Current Count: {{ count$ | async }}</h1>
    <h1>Current Count: {{ count }}</h1>
  `,
})
export class AppComponent {
  count$:Observable<number> | undefined
  count: number = 0

  constructor(private store:Store<{count:number}>){
    this.count$ = this.store.select("count")
    this.store.select("count").subscribe(res=>{
      this.count = res
    })
  }

}
