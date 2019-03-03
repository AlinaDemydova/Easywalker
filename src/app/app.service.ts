import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SECTION } from './section-page/mock-section';
import { SectionTemplate } from './section-page/section-template';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getSectionBuggy(): Observable<SectionTemplate[]> {
    return of(SECTION.filter(x => x.type == 'buggy'));
  }
  getSectionStroller(): Observable<SectionTemplate[]> {
    return of(SECTION.filter(x => x.type == 'stroller'));
  }

}
