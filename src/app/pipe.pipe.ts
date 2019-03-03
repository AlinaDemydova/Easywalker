import { Pipe, PipeTransform } from '@angular/core';
import { ALLBUGGYS } from './product-page/mock-product';

@Pipe({
  name: 'pipe'
})
export class FiltrPipe implements PipeTransform {
  companies = ALLBUGGYS;
  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }

}
