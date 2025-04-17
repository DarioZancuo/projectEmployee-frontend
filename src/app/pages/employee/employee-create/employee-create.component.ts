import { Component } from '@angular/core';
import { EmployeeServices } from '../../../services/employee-services.service';
import { Router } from '@angular/router';
import { EmployeeRequest } from '../../../models/request/employee-request.model';

@Component({
  selector: 'app-employee-create',
  standalone: false,
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent {

  employee: EmployeeRequest = {
    fullname: '',
    email: '',
    gender: '',
    hobbies: '',
    country: '',
    address: '',
    employeeID: 0,
    contrattoID: 0
  };

  constructor(
    private employeeS: EmployeeServices,
    private router: Router
  ) {}

  salva() {
    this.employeeS.create(this.employee).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.router.navigate(['/employee']);
        } else {
          console.error(res.msg);
        }
      },
      error: err => console.error('Errore creazione:', err)
    });
  }

  annulla() {
    this.router.navigate(['/employee']);
  }
}
