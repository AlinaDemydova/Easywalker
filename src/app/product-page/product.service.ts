import { Injectable } from "@angular/core";
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { SectionPageComponent } from '../section-page/section-page.component';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ProductService {

currentBuggy: ProductTemplate;

checkBuggy: boolean;
stroller: boolean;

cartSubject = new Subject<number>();

constructor(private http: HttpClient){}

  getProduct(id: number): Observable<ProductTemplate> {
    return of(ALLBUGGYS.find(x => x.id === id));   
  }

  getAccessoriseXS(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forBuggyXs));
  }
  getAccessoriseHarvey(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forHarvey));
  }
  getAccessoriseBuggyMini(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forBuggyMini));
  }
  getAccessoriseCharley(): Observable<AccessoriseTemplate[]> {
    return of(ACCESSORISE.filter(x=> x.forCharleyMini));
  }

  // sendOrder(order: any): Observable<any> {
  //   return this.http.post<any>(url , order, httpOptions)
  // }
  // https://angular.io/tutorial/toh-pt6


}
