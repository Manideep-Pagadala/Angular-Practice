import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor() {

  } ngOnInit(): void {

  }

  public loginForm: any = new FormGroup({
    email: new FormControl('11',Validators.required),
    pwd: new FormControl('11',Validators.required)
  });

  

}
