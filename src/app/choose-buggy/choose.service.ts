import { Injectable } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { ALLBUGGYS } from '../product-page/mock-product';
import { Observable, of } from 'rxjs';
import { ProductTemplate } from '../product-page/product-template';
import { FormsModule } from '@angular/forms';
import { ChooseBuggyComponent } from './choose-buggy.component';

@Injectable({providedIn: 'root'})

export class ChooseService {

    constuctor(){}
}