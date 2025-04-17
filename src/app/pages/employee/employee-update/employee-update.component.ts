import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from '../../../services/employee-services.service';
import { EmployeeRequest } from '../../../models/request/employee-request.model';

@Component({
  selector: 'app-employee-update',
  standalone: false,
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {

  employeeID!: number;
  employee: EmployeeRequest = {
    employeeID: 0,
    fullname: '',
    email: '',
    gender: '',
    hobbies: '',
    country: '',
    address: '',
    contrattoID: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeS: EmployeeServices
  ) {}

  ngOnInit(): void {
    this.employeeID = +this.route.snapshot.paramMap.get('id')!;
    this.loadEmployee();
  }

  loadEmployee() {
    this.employeeS.listById(this.employeeID).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.employee = {
            ...res.dati,
            employeeID: this.employeeID
          };
        } else {
          console.error(res.msg);
        }
      },
      error: err => console.error('Errore fetch employee:', err)
    });
  }

  aggiorna() {
    this.employeeS.update(this.employee).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.router.navigate(['/employee']);
        } else {
          console.error(res.msg);
        }
      },
      error: err => console.error('Errore update:', err)
    });
  }

  annulla() {
    this.router.navigate(['/employee']);
  }
}
