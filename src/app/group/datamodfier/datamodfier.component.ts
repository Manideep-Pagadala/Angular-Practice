import { Component } from '@angular/core';
import { Employee } from './employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datamodfier',
  templateUrl: './datamodfier.component.html',
  styleUrl: './datamodfier.component.css'
})
export class DatamodfierComponent {

  employees: Employee[] = [
    new Employee(1, "Ward", 25000),
    new Employee(2, "Scott", 45000),
    new Employee(3, "Allen", 23500),
    new Employee(4, "Buffer", 34200)
  ]

  newEmp: Employee = new Employee(null, "", null);

  onClickDelete(index: number) {
    if (confirm('Are you sure want to delete..?')) {
      this.employees.splice(index, 1);
    }
  }
  onClickInsert() {
    this.employees.push(new Employee(this.newEmp.eid, this.newEmp.name, this.newEmp.salary));
    this.newEmp.eid = null;
    this.newEmp.name = "";
    this.newEmp.salary = null;
  }

}
