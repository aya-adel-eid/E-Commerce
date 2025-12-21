import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class Filter implements PipeTransform {
  transform(arr: any[], value: string, keys: string[]): any[] {
    return arr.filter((item) =>
      keys.some((key) => {
        const fieldText = key.split('.').reduce((obj, prop) => obj[prop], item);
        return fieldText.toLowerCase().includes(value.toLowerCase());
      })
    );
  }
}
// export class Filter implements PipeTransform {
//   transform(arr: any[], value: string, keys: string[]): any[] {
//     return arr.filter((item) => keys.some((key) => item[key].includes(value)));
//   }
// }
