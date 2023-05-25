import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDigit'
})
export class CountDigitPipe implements PipeTransform {

  transform(value: number): number {
    return value.toString().length;
  }

}
