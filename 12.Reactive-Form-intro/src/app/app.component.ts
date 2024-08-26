import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent  implements OnInit{
  
  addForm: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.createNewForm()

    this.addForm.controls["email"].setValue("zamir@gmail.com")
  }


  createNewForm() {
    this.addForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)])
    })
  }

  add() {
    if (this.addForm.valid) {
      console.log(this.addForm.value)
      this.addForm.reset()
    }
  }

  
}
