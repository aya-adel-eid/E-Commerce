import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountCart',
})
export class DiscountCartPipe implements PipeTransform {
  transform(totalPrice: number): number {
    if (totalPrice > 20000) return 2000;
    if (totalPrice > 10000) return 1000;
    if (totalPrice > 5000) return 500;
    return 0;
  }
}
