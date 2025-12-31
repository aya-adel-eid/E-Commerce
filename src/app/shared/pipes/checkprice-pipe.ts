import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkprice',
})
export class CheckpricePipe implements PipeTransform {
  transform(price: number): string | null {
    if (price > 500 && price < 1000) {
      return '10%';
    } else if (price > 1000 && price < 2500) {
      return '30%';
    } else if (price > 20000 && price < 30000) {
      return '40%';
    } else if (price > 30000 && price < 50000) {
      return '50%';
    } else return null;
  }
}
