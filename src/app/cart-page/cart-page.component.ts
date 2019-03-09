import { Component, OnInit, TemplateRef, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLBUGGYS } from '../product-page/mock-product';
import { stringify } from '@angular/core/src/render3/util';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductTemplate } from '../product-page/product-template';
import { ProductService } from '../product-page/product.service';
//import { userInfo } from 'os';
// import { Location } from '@angular/common';

@Component({
  outputs: ['countQuantitySum'],
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  
  modalRef: BsModalRef;
  productsInCart: ProductTemplate[];
  firstTotal: number;
  total: number;
  public countQuantitySum: number = 0;
  public OrderForm: FormGroup;

  // orderForm
  // user = new User()
   
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.getItemsFromLocalStorage();
    this.calculateFirstSum();
    this.calculateTotal();
    this.countQuantity();
    this.orderForm();    
  }

  getItemsFromLocalStorage() {
    this.productsInCart = JSON.parse(localStorage.getItem('obj'));
  }

  calculateFirstSum() {
  this.productsInCart.forEach(x=> {
    x.totalItem = x.price * x.quantity;
  });
  }

  calculateTotalItem(id: number) {
    const result = this.productsInCart.find(x=> x.id === id);
    if(result){
      result.totalItem = result.price * result.quantity;
    } 
    //this.productService.cartSubject.next(true);
  }

  calculateTotal(){
    this.total = 0;
    this.productsInCart.map(x=> this.total += x.price * x.quantity);
    if(this.productsInCart){
      localStorage.setItem('obj', JSON.stringify(this.productsInCart));
    }
    this.countQuantity();
  }

  deleteProduct(id: number){
    // this.productsInCart = this.productsInCart.filter(x => x != itemInCart)
    this.productsInCart = JSON.parse(localStorage.getItem('obj'));
    this.productsInCart = this.productsInCart.filter(x=> x.id !== id);
    localStorage.setItem('obj', JSON.stringify(this.productsInCart));
    //this.countQuantity();
    this.calculateFirstSum();
    this.calculateTotal();
  }

  countQuantity() {
    this.countQuantitySum = 0;
    this.productsInCart.forEach(x => this.countQuantitySum += x.quantity);
    // localStorage.setItem('obj', JSON.stringify(this.productsInCart))
    this.productService.cartSubject.next(this.countQuantitySum);
  }

  orderForm() {
    if (!this.OrderForm) {
      this.OrderForm = this.formBuilder.group({
        'UserName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        'Password': new FormControl('', [Validators.required])
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  // clearCart() {
  //   this.productsInCart = localStorage.clear();
  // }
}





  


  

