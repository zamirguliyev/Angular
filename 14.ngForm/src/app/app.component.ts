import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DatePipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  addModel = new Employee()
  updateModel = new Employee()
  employees: Employee[] = []
  index:number = 0
  isUpdateFormActive:boolean = false

  constructor(
    private _date: DatePipe
  ) {
    this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd')
  }


  save(form: NgForm) {
    if (form.valid) {
      this.employees.push(this.addModel)
      // form.reset()
      this.addModel = new Employee()
      this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd')
    }
  }

  get(model:Employee,index:number){
    this.index = index
    this.updateModel = {...model}
    this.isUpdateFormActive = true
  }

  update(form:NgForm){
    if(form.valid){
      this.employees[this.index] = this.updateModel
      this.isUpdateFormActive = false
    }
  }

  cancel(){
    this.isUpdateFormActive = false
  }

}

class Employee {
  name: string = '';
  job: string = '';
  startingDate: string | null = ''
}
