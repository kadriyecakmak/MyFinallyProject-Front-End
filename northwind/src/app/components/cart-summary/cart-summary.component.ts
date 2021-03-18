import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartServive:CartService, private toastrService:ToastrService) { }

  
  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems = this.cartServive.list();
  }
  removeFromCart(product:Product){
    this.cartServive.removeFromCart(product)
    this.toastrService.error("Silindi",product.productName+ "sepetten silindi.")
  }

}
