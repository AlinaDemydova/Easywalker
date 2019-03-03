import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { AccessoriseTemplate } from './accessorise-template';
import { ACCESSORISE } from './mock-accessorise';
import { AccessoriseService } from './accessorise.service';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductService } from '../product-page/product.service';

@Component({
  providers: [ProductPageComponent],
  selector: 'app-accessorise-page',
  templateUrl: './accessorise-page.component.html',
  styleUrls: ['./accessorise-page.component.scss']
})
export class AccessorisePageComponent implements OnInit {

  accessorises = ACCESSORISE;
  accesorise: AccessoriseTemplate;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private accessoriseService: AccessoriseService,
    private router: Router,
    private productPageComponent: ProductPageComponent) { }

  ngOnInit() {
  }

  addToCartAccessorise(id: number): void {
    const arr = JSON.parse(localStorage.getItem('obj'));
    this.accesorise = this.accessorises.find(x=> x.id === id);
    if(arr) {
      arr.push(this.accesorise);
      localStorage.setItem('obj', JSON.stringify(arr));
    } else {
      localStorage.setItem('obj', JSON.stringify([this.accesorise]));
    }
    this.productService.cartSubject.next();
    this.router.navigateByUrl('/cart');
  }
  
}
