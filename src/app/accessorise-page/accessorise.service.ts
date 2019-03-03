
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { AccessoriseTemplate } from './accessorise-template';
import { ACCESSORISE } from './mock-accessorise';
 
@Injectable({providedIn: 'root'})
export class AccessoriseService {

  constuctor(){}

  getAccessorise(id: number): Observable<AccessoriseTemplate> {
    return of(ACCESSORISE.find(accessorise => accessorise.id === id));
  }

}
