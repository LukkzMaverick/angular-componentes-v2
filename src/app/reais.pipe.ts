import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reais'
})
export class ReaisPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `R$ ${parseFloat(value).toFixed(2)}`
  }

}
