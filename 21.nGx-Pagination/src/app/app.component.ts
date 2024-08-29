import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  collection:number[] = [];
  pageNumber:number = 1
  pageSize:number = 10
  constructor() {
    for (let i = 1; i <= 1000; i++) {
      this.collection.push(i);
    }
  }
}
