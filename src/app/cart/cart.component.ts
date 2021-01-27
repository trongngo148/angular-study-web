import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CartService } from "../service/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    address: ""
  });
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.items = this.cartService.clearCart();
      console.warn("Your order has been submiited", this.checkoutForm.value);
      this.checkoutForm.reset();
    } else {
      console.warn("You order has been invalid");
    }
  }
}
