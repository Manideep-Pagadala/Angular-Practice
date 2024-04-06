import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class RegComponent implements OnInit {
  public response: string = "";
  public user: userbinding = {
    uname: "",
    email: "",
    pwd: "",
    phno: null
  }
  constructor(@Inject(HttpClient) private client: HttpClient) {
  } ngOnInit(): void {
  }

  reg() {
    console.log(this.user);
    this.client.post("http://localhost:8080/reg", this.user, { responseType: "text" }).subscribe(res => {
      this.response = res;
      alert(this.response);
      console.log(res);
    }
    )
  }

}
