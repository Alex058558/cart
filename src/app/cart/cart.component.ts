import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ['',Validators.required],
    address: ['',Validators.required],
  });

  onSubmit() {
    if(this.checkoutForm.status == 'VALID'){
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }else{
      alert('Please checkout the input!');
    }
  }
}
