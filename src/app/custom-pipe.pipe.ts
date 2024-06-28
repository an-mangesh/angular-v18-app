import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLength',
})
export class CustomLengthFilterPipe implements PipeTransform {
  transform(values: string[], minLength: number): string[] {
    return values.filter((value) => value.length >= minLength);
  }
}

@Pipe({
  name: 'reverse',
})
export class CustomReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}
