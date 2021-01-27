import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-person-add",
  templateUrl: "./person-add.component.html",
  styleUrls: ["./person-add.component.css"]
})
export class PersonAddComponent implements OnInit {
  formPersonAdd: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formPersonAdd = this.formBuilder.group({
      username: [""],
      password: [""],
      gender: ["Male"],
      birthday: [""]
    });
    console.log(this.formPersonAdd)
  }
}
