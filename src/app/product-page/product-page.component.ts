import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { ProductTemplate } from './product-template';
import { ALLBUGGYS } from './mock-product';
import { ACCESSORISE } from '../accessorise-page/mock-accessorise';
import { Location } from '@angular/common';
import { AccessoriseTemplate } from '../accessorise-page/accessorise-template';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

accessorises = ACCESSORISE;
currentBuggy: ProductTemplate;
isItInCompare: boolean = false;
accesorise: AccessoriseTemplate;
isCurrentBuggyInCart: boolean = false;
isCurrentAccessoriseInCart: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getAccessorise();
    //localStorage.clear();
    this.route.params.subscribe(params=> {this.getProduct(params['id']);});
  }

  getProduct(idParam?: string): void {
    const id = idParam ? +idParam : +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.currentBuggy = product);
  }

      addToCart() {
        let arr = JSON.parse(localStorage.getItem('obj'));
        if(arr) {
          this.isCurrentBuggyInCart = arr.find(x => x.id === this.currentBuggy.id);
        }
        if (!this.isCurrentBuggyInCart) {
          if(arr) {
            arr.push(this.currentBuggy);
            localStorage.setItem('obj', JSON.stringify(arr));
          } else {
            localStorage.setItem('obj', JSON.stringify([this.currentBuggy]));
          }
        } else {
          console.log(arr);
          debugger
          arr = arr.map(x => {
          let isInCart = arr.find(x => x.id === this.currentBuggy.id);
          isInCart ? isInCart.quantity += 1 : x;
          localStorage.setItem('obj', JSON.stringify(arr));
          });
          this.router.navigateByUrl('/cart');
        }      
        this.productService.cartSubject.next();
        this.router.navigateByUrl('/cart');
      }
  addToCartAccessorises(id: number) {
    let arr = JSON.parse(localStorage.getItem('obj'));
    this.accesorise = this.accessorises.find(x=> x.id === id);
    if(arr) {
      this.isCurrentAccessoriseInCart = arr.find(x => x.id === this.accesorise.id);
    }
    if(!this.isCurrentAccessoriseInCart) {
      if(arr) {
        arr.push(this.accesorise);
        localStorage.setItem('obj', JSON.stringify(arr));
      } else {
        localStorage.setItem('obj', JSON.stringify([this.accesorise]));
      }
    } else {
      arr = arr.map(x => {
      let isItInCart = arr.find(x => x.id === this.accesorise.id);
      isItInCart ? isItInCart.quantity += 1 : x;
      localStorage.setItem('obj', JSON.stringify(arr));
      });
      this.router.navigateByUrl('/cart');
    }    
   
    this.productService.cartSubject.next();
    this.router.navigateByUrl('/cart');
  }

  addToCompare() {
    const arrCompare = JSON.parse(localStorage.getItem('objToCompare'));
    if(arrCompare) {
      this.isItInCompare = arrCompare.find(x => x.id === this.currentBuggy.id);
    }
  
    if(!this.isItInCompare) {
      if(arrCompare) {
        arrCompare.push(this.currentBuggy);
        localStorage.setItem('objToCompare', JSON.stringify(arrCompare));
      } else {
        localStorage.setItem('objToCompare', JSON.stringify([this.currentBuggy]));
      }
      this.router.navigateByUrl('/compare');
    } else {
      alert('Этот товар уже добавлен к сравнению.');
    }
  }

  getAccessorise(): void {
    if(this.currentBuggy.sectionId == 1 || this.currentBuggy.sectionId == 2 || this.currentBuggy.sectionId == 3) {
      this.productService.getAccessoriseXS().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else if (this.currentBuggy.sectionId == 4) {
      this.productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else if (this.currentBuggy.sectionId == 5) {
      this.productService.getAccessoriseHarvey().subscribe(accessorises =>{ this.accessorises = accessorises; });
    }  else if (this.currentBuggy.sectionId == 6) {
      this.productService.getAccessoriseCharley().subscribe(accessorises =>{ this.accessorises = accessorises; });
    } else {
      this.productService.getAccessoriseBuggyMini().subscribe(accessorises =>{ this.accessorises = accessorises; });
    }
  }
  
}
