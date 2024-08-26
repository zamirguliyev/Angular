import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, DatePipe,CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.createAddForm()
  }

  employees: Employee[] = []

  addForm: FormGroup = new FormGroup({})
  updateForm: FormGroup = new FormGroup({})
  isUpdateFormActive: boolean = false
  updateIndex: number = 0

  constructor(private _date: DatePipe) {

  }


  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      startinDate: new FormControl(this._date.transform(new Date(), 'yyyy-MM-dd')),
      section: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      startinDate: new FormControl(this._date.transform(new Date(), 'yyyy-MM-dd')),
      section: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  save() {
    if (this.addForm.valid) {
      this.employees.push(this.addForm.value)
      // this.addForm.reset()
      // this.addForm.controls['startinDate'].setValue(this._date.transform(new Date(),'yyyy-MM-dd'))

      this.createAddForm()
    }
  }

  get(model: Employee, index: number) {
    this.createUpdateForm()
    this.updateForm.controls['name'].setValue(model.name)
    this.updateForm.controls['startinDate'].setValue(model.startinDate)
    this.updateForm.controls['section'].setValue(model.section)
    this.updateIndex = index
    this.isUpdateFormActive = true
  }

  update() {
    if(this.updateForm.valid){
      this.employees[this.updateIndex] = this.updateForm.value
      this.cancel()
    }
  }

  cancel() {
    this.isUpdateFormActive = false
  }

}

class Employee {
  name: string = '';
  section: string = '';
  startinDate: string = ''
}