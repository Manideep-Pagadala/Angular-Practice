import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isSubmit: boolean = false;

  constructor(public api: HttpClient) {
  } ngOnInit(): void {
    this.api.get("http://localhost:8080/test",).subscribe((res: any) => {
      alert(res);
      console.log(res);
    })

  }

  public loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get con() {
    return this.loginForm.controls;
  }
  login() {
    this.isSubmit = true;
    console.log(this.loginForm.value)
    const data = new FormData();
    data.append("email", this.loginForm.value.email);
    data.append("pwd", this.loginForm.value.pwd);

    this.api.post("http://localhost:8080/login", data).subscribe((out: any) => {
      alert(out);
      console.log(out);
    })
  }

}
