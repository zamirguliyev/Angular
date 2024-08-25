import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : Router) { }

  isAuthhenticated(){
    const token: string | null   = localStorage.getItem('token');
  
    if(!token){
      this.router.navigateByUrl("/login")
      return false
    }
  
    return true;
  }

}
