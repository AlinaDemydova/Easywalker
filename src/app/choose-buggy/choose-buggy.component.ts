import { Component, OnInit, OnDestroy } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { ProductTemplate } from '../product-page/product-template';
import { ChooseService } from '../choose-buggy/choose.service';
import { ProductService } from '../product-page/product.service';
import { FormsModule, NgModel } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-buggy',
  templateUrl: './choose-buggy.component.html',
  styleUrls: ['./choose-buggy.component.scss']
})
export class ChooseBuggyComponent implements OnInit {
choosedBuggy = ALLBUGGYS;
sortedBuggy: ProductTemplate[];

sortByStroller: boolean;
sortByBuggy: boolean;
sortByGirl: boolean;
sortByBoy: boolean;
sortByUnisex: boolean;

buggySubs: Subscription;

  constructor(
    private chooseService: ChooseService, 
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.sortByBuggy = this.productService.checkBuggy ? true : false;
    this.sortByStroller = this.productService.stroller ? true : false;       
    this.sortedProducts();
  }

  sortedProducts() {
    const stroller = this.sortByStroller ? 'stroller' : null;
    const buggy = this.sortByBuggy ? 'buggy' : null;
    const boy = this.sortByBoy ? 'boy' : null;
    const girl = this.sortByGirl ? 'girl' : null;
    const all = this.sortByUnisex ? 'all' : null;

    if(stroller || buggy){
      this.choosedBuggy = ALLBUGGYS.filter(x=> x.type === stroller || x.type === buggy);
    } else {
      this.choosedBuggy = ALLBUGGYS;
    }
    if(boy || girl || all){
      this.choosedBuggy = this.choosedBuggy.filter(x=> x.sex === girl || x.sex === boy || x.sex === all);
    }
   }

  }