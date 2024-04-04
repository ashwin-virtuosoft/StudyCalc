import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperatorsService } from './operators.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    [OperatorsService],
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
