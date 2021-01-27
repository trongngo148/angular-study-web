import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { CartComponent } from "./cart/cart.component";
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component";
import { DemoMaterialModule } from "../../material-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { MatSliderModule } from "@angular/material/slider";
import { PersonAddComponent } from "./person-add/person-add.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "product/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "person-add", component: PersonAddComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    PersonAddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
