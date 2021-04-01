import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: any, ttc: boolean): number {
    if (ttc) {
      return val.totalTTC();
    }
    return val.totalHT();
  }
}
