import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curencyConvert'
})
export class CurencyConvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
