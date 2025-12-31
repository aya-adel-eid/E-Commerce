import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wayDelivery',
})
export class WayDeliveryPipe implements PipeTransform {
  transform(totalPrice: number): string {
    if (totalPrice > 1000 && totalPrice < 5000) {
      return 'free';
    } else {
      return '200 Egp';
    }
  }
}
