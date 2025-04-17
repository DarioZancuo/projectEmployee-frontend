import { Component, OnInit } from '@angular/core';
import { ContrattoRequest } from '../../../models/request/contratto-request.model';
import { ContrattoServices } from '../../../services/contratto-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contratto-create',
  standalone: false,
  templateUrl: './contratto-create.component.html',
  styleUrl: './contratto-create.component.scss'
})
export class ContrattoCreateComponent implements OnInit {
  employeeID!: number;

  dataAssunzione = '';
  dataDimissione = '';
  stipendio = 0;
  ruoloID = 0;
  categoriaID = 0;
  status = 1;

  constructor(
    private route: ActivatedRoute,
    private contrattoS: ContrattoServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('employeeID');
    if (id) {
      this.employeeID = +id;
    } else {
      alert('ID dipendente mancante!');
      this.router.navigate(['/employee']);
    }
  }

  creaContratto(): void {
    const formattedAssunzione = this.formatDateToDDMMYYYY(this.dataAssunzione);
    const formattedDimissione = this.dataDimissione
      ? this.formatDateToDDMMYYYY(this.dataDimissione)
      : '';
  
    const body: ContrattoRequest = {
      contrattoID: 0,
      dataAssunzione: formattedAssunzione,
      dataDimissione: formattedDimissione,
      stipendio: this.stipendio,
      ruoloID: this.ruoloID,
      categoriaID: this.categoriaID,
      status: this.status,
      employeeID: this.employeeID
    };
  
    this.contrattoS.create(body).subscribe({
      next: (res: any) => {
        if (res.rc) {
          alert('Contratto creato con successo!');
          this.router.navigate(['/employee']);
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore creazione:', err)
    });
  }

  formatDateToDDMMYYYY(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  

  annulla(): void {
    this.router.navigate(['/employee']);
  }
}
