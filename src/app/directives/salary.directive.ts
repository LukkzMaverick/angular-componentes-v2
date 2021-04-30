import { ElementRef } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[salary]'
})
export class SalaryDirective {

  constructor(private element: ElementRef) { }

  @Input()
  set salary(value){
    const salary = parseFloat(value)
    let classList = this.element.nativeElement.classList;
    if(salary > 20000){
      classList.add('highSalary')
      classList.remove('normalSalary')
      classList.remove('lowSalary')
    }else if( salary <= 2000){
      classList.add('lowSalary')
      classList.remove('highSalary')
      classList.remove('normalSalary')
    }else{
      classList.add('normalSalary')
      classList.remove('lowSalary')
      classList.remove('highSalary')
    }
  }

}
