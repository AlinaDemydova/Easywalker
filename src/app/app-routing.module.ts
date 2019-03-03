import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AccessorisePageComponent } from './accessorise-page/accessorise-page.component';
import { ChooseBuggyComponent } from './choose-buggy/choose-buggy.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: 'cart', component: CartPageComponent },
  { path: 'disneyXs', component: SectionPageComponent },
  { path: '', component: MainPageComponent },
  { path: 'section/:id', component: SectionPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'accessorise', component: AccessorisePageComponent },
  { path: 'choose', component: ChooseBuggyComponent },
  { path:'compare', component: CompareComponent }
  // { path: 'accessorise/:id'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
