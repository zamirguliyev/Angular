import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  callSwal() {
    // Swal.fire({
    //   text:'Message Content',
    //   title:"Title Content",
    //   confirmButtonText:'Confirm',
    //   showConfirmButton:true,
    //   showCancelButton:true,
    //   cancelButtonText:'Cancel',
    //   cancelButtonColor:'green' 
    // }).then(res=>{
    //   if(res.isConfirmed){
    //     alert("You vin")
    //   }
    //   if(res.isDismissed){
    //     alert("You Lost")
    //   }
    // })

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton:false
    })
    Toast.fire('Login', '', 'success')
  }
}
