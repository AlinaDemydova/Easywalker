import { Component, OnInit } from '@angular/core';
import { SectionTemplate } from './section-template';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SectionService } from './section.service';
import { SECTION } from './mock-section';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ALLBUGGYS } from '../product-page/mock-product';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

 @Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})

export class SectionPageComponent implements OnInit {
  section : SectionTemplate;
  buggys = ALLBUGGYS;
  
  constructor(
    private sectionService: SectionService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
    ) {} 

    ngOnInit(): void {
      this.getSection();
      this.getBuggys();
      this.route.params.subscribe(params => {
        this.getSection(params['id']);
        this.getBuggys(params['model']);
      });
    }

    getUrl():SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.section.iframeSrc);
    }

    getSection(idParam?: string): void {
      //const id = idParam ? +idParam : this.section.id;
      const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
      this.sectionService.getSection(id).subscribe(section => this.section = section);
    }

    getBuggys(modelll?: string): void {
      const models = modelll ? modelll : this.section.model;
      this.sectionService.getBuggys(models).subscribe(buggys => this.buggys = buggys);
    }

 }
