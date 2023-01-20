import { Component } from '@angular/core';
import { products,Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[] = products 
  constructor(){}

  share(){
    window.alert('The product has been shared!');
  }
}
