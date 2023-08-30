import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return ((9/5*value)+32).toFixed(1);
  }

}
