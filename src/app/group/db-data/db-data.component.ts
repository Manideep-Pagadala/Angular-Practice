import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from './user-dto';
@Component({
  selector: 'app-db-data',
  templateUrl: './db-data.component.html',
  styleUrl: './db-data.component.css'
})
export class DbDataComponent implements OnInit {
  users: UserDTO[] = [];
  constructor(private api: HttpClient) { }

  ngOnInit(): void {
    this.api.get<UserDTO[]>("http://localhost:8080/all").subscribe(res => {
      this.users = res;
      console.log(res)
    },
      (error) => {
        console.error(error);
      }
    )
  }

}
