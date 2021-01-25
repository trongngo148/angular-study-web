import { Component, OnInit } from "@angular/core";

import { products } from "../products";
import { CartService } from "../service/cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor(private cartService: CartService) {}
  dogImgs = "";
  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notify when the product goes on sales");
  }
  ngOnInit() {
    this.cartService
      .getDogImg()
      .subscribe(data => (this.dogImgs = data.message));
  }
  reLoadImg() {
    this.dogImgs = "";
    this.cartService
      .getDogImg()
      .subscribe(data => (this.dogImgs = data.message));
  }
}
