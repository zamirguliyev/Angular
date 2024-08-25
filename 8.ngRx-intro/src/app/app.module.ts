import { DatePipe } from '@angular/common';
import { inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent  
  ],
  imports: [
    BrowserModule,    
    FormsModule, 
    StoreModule.forRoot({count:counterReducer})
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
