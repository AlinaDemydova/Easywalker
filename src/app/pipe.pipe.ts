import { Pipe, PipeTransform } from '@angular/core';
import { ProductTemplate } from './product-page/product-template';

@Pipe({
  name: 'pipe'
})
export class FiltrPipe implements PipeTransform {
  
  transform(allbuggy: ProductTemplate[], searchText: string): any[] {
    if (!allbuggy) { return []; }
    if (!searchText) { return allbuggy; }
    searchText = searchText.toLowerCase();
    allbuggy = allbuggy.filter( it => {
     return it.h1.toLowerCase().includes(searchText);// h1 ????????????????????
    });
    return allbuggy;
   }
}
