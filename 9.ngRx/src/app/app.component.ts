import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { Store } from '@ngrx/store';
import { addUser } from './users/users.action';

@Component({
  selector: 'app-root',
  template:`
    <input  [(ngModel)]="user.name"/>
    <input  [(ngModel)]="user.lastName"/>
    <button (click)="add()">Save</button>
    <app-users> </app-users>
  `,
})
export class AppComponent {

  user:UserModel = new UserModel()

  constructor(private store:Store<{users:UserModel[]}>){

  }
   add(){
    this.store.dispatch(addUser({user:this.user}))
      this.user  = new UserModel()
   }
}
