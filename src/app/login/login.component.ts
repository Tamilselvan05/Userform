import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usersObj = {
    email: ""
  }

  constructor(public my: CommonService) { }

  ngOnInit() {
  }

  activeBut() {
    // enga irunthu service filela yeadukuran
    this.my.showBut();
    this.my.users = this.usersObj;
    console.log(this.usersObj)
  }

}
