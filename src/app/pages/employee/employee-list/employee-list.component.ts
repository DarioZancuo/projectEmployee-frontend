import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../../../services/employee-services.service';
import { EmployeeModel } from '../../../models/dto/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  listaEmployee: EmployeeModel[] = [];

  constructor(private employeeS: EmployeeServices, private router: Router) {}

  ngOnInit(): void {
    this.caricaLista();
  }

  caricaLista() {
    this.employeeS.listAll().subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.listaEmployee = res.dati;
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore chiamata:', err)
    });
  }

  creaEmployee() {
    this.router.navigate(['/employee/create']);
  }

  modificaEmployee(id: number) {
    this.router.navigate(['/employee/update', id]);
  }

  eliminaEmployee(id: number) {
    if (confirm('Confermi l\'eliminazione dell\'employee?')) {
      this.employeeS.delete({ employeeID: id }).subscribe({
        next: (res: any) => {
          if (res.rc) this.caricaLista();
          else console.error(res.msg);
        },
        error: (err) => console.error('Errore delete:', err)
      });
    }
  }

  gestisciContratto(emp: EmployeeModel) {
    if (emp.contrattoID && emp.contrattoID.contrattoID) {
      this.router.navigate(['/contratti/info', emp.contrattoID.contrattoID]);
    } else {
      this.router.navigate(['/contratti/create', emp.id]);
    }
  }
  
  
  
}