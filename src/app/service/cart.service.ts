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

  getDogImg(): Observable<ImgDogModel> {
    return this.http.get<ImgDogModel>(
      "https://dog.ceo/api/breeds/image/random"
    );
  }
}
