import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- <h1>Todo App</h1>
   @if(!isUpdate) {
      <div>
      <label for="">Work</label>
      <input type="text" [(ngModel)]="work" />
      <button (click)="save()">Send</button>
    </div>
    }@else {
      <div>
      <label for="">Update</label>
      <input type="text" [(ngModel)]="updateWork" />
      <button (click)="update()">Update</button>
    </div>
    }
    <hr />
    <div>
      <ul>
        @for(data of todos; track data){
          <li>{{data}}
           @if(!isUpdate){
            <button (click)="delete($index)">Delete</button>
            <button (click)="get($index)">Update</button>
           }
          </li>
        }
      </ul>
    </div> -->

    <h1>Card</h1>

    <div>
      <label>Credit</label>
      <input [(ngModel)]="creditToal" />
    </div>
    <div>
      <label>Credit Tax count</label>
      <select [(ngModel)]="taxCount">
        @for(data of taxs; track data){
        <option>{{ data }}</option>
        }
      </select>
    </div>
    <div>
      <button (click)="count()">Count</button>
    </div>
    <hr />
    <h3>
      {{ result }}
    </h3>
    <hr />
    <table>
      <tr>
        <th>Tax</th>
        <th>Tax Count</th>
        <th>Return Count</th>
      </tr>
      @for(data of taxPlan; track data){
      <tr>
        <td>
          {{ $index + 1 }}
        </td>
        <td>{{ data.taxCount }}</td>
        <td>{{ data.returnCount }}</td>
      </tr>
      }
    </table>
  `,
})
export class AppComponent {
  // work: string = ""
  // updateWork: string = ''
  // updateIndex: number = 0
  // todos: string[] = []
  // isUpdate: boolean = false

  // save() {
  //   this.todos.push(this.work)
  //   this.work = ""
  // }
  // delete(index: number) {
  //   this.todos.splice(index, 1)
  // }
  // get(index: number) {
  //   this.isUpdate =true
  //   this.updateIndex = index
  //   this.updateWork = this.todos[index]
  // }
  // update() {
  //   this.todos[this.updateIndex] = this.updateWork
  //   this.isUpdate = false
  // }

  creditToal: number = 0;
  taxs: number[] = [3, 6, 12, 18, 24];
  taxCount: number = 3;

  result: string = '';

  taxPlan: { taxCount: number; returnCount: number }[] = [];

  count() {
    const newValue: number = (this.creditToal / this.taxCount) * 1.25;
    let payValue: number = newValue * this.taxCount;

    this.result = `Tax value ${newValue} Tax Count ${this.taxCount}  Total ${payValue}`;

    this.taxPlan = [];
    for (let index = 0; index < this.taxCount; index++) {
      payValue -= newValue;
      const data = {
        taxCount: newValue,
        returnCount: payValue,
      };

      this.taxPlan.push(data);
    }
  }
}
