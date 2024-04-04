import { Component, OnInit, input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { OperatorsService } from '../operators.service';
import test from 'node:test';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{

 inputStr:any
 name:any
 test:any
 Value:any
 constructor(private operatorService:OperatorsService){}

 ngOnInit(): void {
  this.inputStr=new FormGroup({
    text : new FormControl()   

  })  
   
 }

 Test(){
  this.name=this.operatorService.name;
  
 }
 Test1(){
 this.test=this.operatorService.study();
 console.log(this.test);
 }

Factorial() {
  const currentValue = this.inputStr.controls.text.value;
  const num = parseInt(currentValue);
  
  if (!isNaN(num) && num >= 0) {
    const result = this.operatorService.Factorial(num);
    this.inputStr.controls.text.setValue(result.toString());
  } else {
    this.inputStr.controls.text.setValue('Invalid Input');
  }
}

Square(){
  const currentValue=this.inputStr.controls.text.value;
  const num=parseInt(currentValue);

  const result=this.operatorService.Square(num);
  this.inputStr.controls.text.setValue(result.toString());
}

Cube(){
  const currentValue=this.inputStr.controls.text.value;
  const num=parseFloat(currentValue);

  const result=this.operatorService.cube(num);
  this.inputStr.controls.text.setValue(result.toString());
}

valuePi() {
  const currentValue = this.inputStr.controls.text.value;
  if (currentValue === '') {
    this.inputStr.controls.text.setValue(Math.PI.toString());
  } else {
    const lastChar = currentValue[currentValue.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      this.inputStr.controls.text.setValue(currentValue + Math.PI);
    } else {
      this.inputStr.controls.text.setValue(currentValue + '*' + Math.PI);
    }
  }
}

valueRoot(){
  const currentValue=this.inputStr.controls.text.value;
  const num=parseFloat(currentValue);

  const result=this.operatorService.Root(num);
  this.inputStr.controls.text.setValue(result.toString());
}

valueSin() {
  const currentValue = this.inputStr.controls.text.value;
  const num = parseFloat(currentValue);

  const result = this.operatorService.Sin(num);
  this.inputStr.controls.text.setValue(result.toString());
}

valueCos(){
  const currentValue = this.inputStr.controls.text.value;
  const num = parseFloat(currentValue);

  const result = this.operatorService.Cos(num);
  this.inputStr.controls.text.setValue(result.toString());
}

valueTan(){
  const currentValue = this.inputStr.controls.text.value;
  const num = parseFloat(currentValue);

  const result = this.operatorService.Tan(num);
  this.inputStr.controls.text.setValue(result.toString());
}

valueExp() {
  const currentValue = this.inputStr.controls.text.value;
  const [base, exponent] = currentValue.split('^').map(parseFloat);
  const result = this.operatorService.Exponential(base, exponent);
  this.inputStr.controls.text.setValue(result.toString());
}

buttonClick(buttonElement:any){

  let buttonText=buttonElement.textContent
  console.log('Button Text:', buttonText);
  if(this.inputStr.controls.text.value!=null){
    this.inputStr.controls.text.setValue(
      this.inputStr.controls.text.value
      + buttonText)
  }else{
    this.inputStr.controls.text.setValue(buttonText)
  }
  // this.inputStr.controls.text.setValue(buttonText)
 }

 clearDisplay(){
  this.inputStr.controls.text.setValue("")
 }

 calculate(){
  let result=eval(this.inputStr.controls.text.value)
  this.inputStr.controls.text.setValue(result)
 }

 deleteLast(){
  let str=this.inputStr.controls.text.value
  str=str.slice(0,-1)
  this.inputStr.controls.text.setValue(str)
 }
 
 performOperation(operator: string) {
  if (this.inputStr.controls.text.value != null) {
    const currentValue = this.inputStr.controls.text.value;

    const lastChar = currentValue[currentValue.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar==='%') {
      this.inputStr.controls.text.setValue(currentValue.slice(0, -1) + operator);
    } else {
      this.inputStr.controls.text.setValue(currentValue + operator);
    }
  }
}




}
