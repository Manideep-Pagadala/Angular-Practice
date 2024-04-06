import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isSubmit: boolean = false;

  constructor(@Inject(HttpClient) public api: HttpClient) {
  } ngOnInit(): void {

  }

  public loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get con() {
    return this.loginForm.controls;
  }
  login() {
    this.isSubmit = true;
    console.log(this.loginForm.value)
    this.api.post("http://localhost:8080/login", this.loginForm.value, { responseType: "text" }).subscribe((out: any) => {
      alert(out);
      console.log(out);
    })
  }

}
