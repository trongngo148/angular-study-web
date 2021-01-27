import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ImgDogModel } from "../product-list/img-dog.model";
@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getSnippingPrices() {
    return this.http.get("../../assets/shipping.json");
  }
  b;
  getDogImg(): Observable<ImgDogModel> {
    this.b = this.http.get<ImgDogModel>(
      "https://dog.ceo/api/breeds/image/random"
    );
    this.b.subscribe(Response => {
      // If Response comes function
      // hideloader() is called
      if (Response) {
        hideloader();
      }
    });
    function hideloader() {
      // Setting display of spinner
      // element to none
      console.log("hide");
      document.getElementById("loading").style.display = "none";
    }
    return this.b;
  }
}
