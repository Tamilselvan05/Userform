import { Component, OnInit } from "@angular/core";
import { User } from 'src/models/User';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  //------model file name add pniirukan 
  userObj: User = {
    name: "",
    age: null,
    email: ""
  };

  userArr = [];

  constructor() { }

  ngOnInit() { }
  //button click pna apdina intha function cl agum arraykula objecta push pniirukom 
  createForm() {
    console.log(this.userObj);
    this.userArr.push(this.userObj);
    console.log(this.userArr);
    // function namema enga clpnita
    this.clearMethod();
  }
// buttona click pnathum automatic dlte pnura function
  clearMethod() {
    this.userObj = {
      name: "",
      age: null,
      email: "",
    };
  }
}
