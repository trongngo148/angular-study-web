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
  dogImgs =
    "https://assets.materialup.com/uploads/a7e6009b-6d69-4569-b1ee-0e01b234f2a1/preview.gif";
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
    this.dogImgs =
      "https://assets.materialup.com/uploads/a7e6009b-6d69-4569-b1ee-0e01b234f2a1/preview.gif";
    this.cartService
      .getDogImg()
      .subscribe(data => (this.dogImgs = data.message));
  }
}
