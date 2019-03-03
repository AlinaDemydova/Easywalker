
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { SectionTemplate } from './section-template';
import { SECTION } from './mock-section';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';
 
@Injectable({providedIn: 'root'})
export class SectionService {

  constuctor(){}

  getSection(id: number): Observable<SectionTemplate> {
    return of(SECTION.find(section => section.id === id));
  }

  getBuggys(model: string): Observable<ProductTemplate[]> {
    return of(ALLBUGGYS.filter(x => x.model === model));
  }
  
}
