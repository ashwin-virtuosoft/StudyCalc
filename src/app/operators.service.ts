import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

 
  constructor() { }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
  }
  Modulus(num1:number,num2:number):number{
    if(num2==0){
      throw new Error('Cannot Mode zero');
    }
    return num1%num2;

  }
  Factorial(num1: number): number {
    if (num1 === 0 || num1 === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= num1; i++) {
      result *= i;
    }
    return result;
  }

  Square(num1:number):number{
    if(num1!=0){
      return num1*num1;
    }else{
        return 0;
    }
  }
  cube(num1:number):number{
    if(num1!=0){
      return num1*num1*num1;
    }else{
      return 0;
    }

  }

  Root(num1:number):number{
    if(num1!=0){
      return Math.SQRT1_2;
    }else{
      return 0;
    }
  }

  Sin(angleInDegrees: number): number {
    const angleInRadians = angleInDegrees * Math.PI / 180;
    return Math.sin(angleInRadians);
  }

  Cos(angleInDegrees: number):number{
    const angleInRadians = angleInDegrees * Math.PI / 180;
    return Math.cos(angleInRadians);
  }

  Tan(angleInDegrees: number):number{
    const angleInRadians = angleInDegrees * Math.PI / 180;
    return Math.tan(angleInRadians);
  }

  Exponential(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
  
  name:string="ashwin";

  testvalue:number=0;

  study(){
    this.testvalue++;
    return this.testvalue;
  }

}
