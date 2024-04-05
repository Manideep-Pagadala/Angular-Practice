import { Component } from '@angular/core';

interface userbinding {
  uname: string,
  email: String,
  pwd: string,
  phno: number | null
}
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {

  public user: userbinding = {
    uname: "",
    email: "",
    pwd: "",
    phno: null
  }

  reg() {
    console.log(this.user);
  }

}
