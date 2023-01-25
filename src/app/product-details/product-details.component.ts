import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
      ) { }
  product: Product|undefined;

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));
    // console.log(productIdFromRoute);
    this.product = products.find(product => product.id == this.route.snapshot.params['productId']);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert(`Your product has been added to the cart`);
  }
}
