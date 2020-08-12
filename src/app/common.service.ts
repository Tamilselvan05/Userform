import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public users = {
    email: ""
  }
  public user = {

    name: ""
  }

  constructor() { }
  clickButton() {
    console.log(this.user)
  }
  // engathu ts filelanthu clpnuvom
  showBut() {
    console.log(this.users);

  }
}
