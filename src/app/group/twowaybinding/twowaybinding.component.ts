import { Component } from '@angular/core';

interface binding {
  name: string,
  email: string,
  phno: number | null,
  pwd: string
}
@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {

  public user: binding = {
    name: "raj",
    email: "raj@gmail.com",
    phno: 7386589980,
    pwd: "1111"
  }

  reg() {
    this.user = {
      name: "Mani",
      email: "mani@gmail.com",
      phno: 7386589980,
      pwd: "0000"

    }

  }
}