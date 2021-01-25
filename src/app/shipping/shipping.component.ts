import { Component, OnInit } from "@angular/core";
import { CartService } from "../service/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent {
  constructor(private cartSerive: CartService) {}
  shippingCosts = this.cartSerive.getSnippingPrices();
}
