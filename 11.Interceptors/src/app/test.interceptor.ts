import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { catchError, of } from 'rxjs';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  const token:string = 'Test'
  // const authReq = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });

  const authReq = req.clone({
    headers:req.headers.set("Authentication","Bearer " + token )
  })

  return next(authReq).pipe(
    catchError((err:HttpErrorResponse)=>{
      //error Handler
      console.log(err)

      return of()
    })
  );
};
