import { Component, OnInit } from '@angular/core';
import { ContrattoModel } from '../../../models/dto/contratto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContrattoServices } from '../../../services/contratto-services.service';
import { ContrattoRequest } from '../../../models/request/contratto-request.model';

@Component({
  selector: 'app-contratto-update',
  standalone: false,
  templateUrl: './contratto-update.component.html',
  styleUrl: './contratto-update.component.scss'
})
export class ContrattoUpdateComponent implements OnInit {
  contrattoID!: number;

  dataAssunzione = '';
  dataDimissione = '';
  stipendio = 0;
  ruoloID = 0;
  categoriaID = 0;
  status = 1;
  employeeID = 0;

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private contrattoS: ContrattoServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.contrattoID = +idParam;
      this.caricaDettaglio();
    } else {
      console.error('ID contratto mancante nella route');
    }
  }

  caricaDettaglio(): void {
    this.contrattoS.listById(this.contrattoID).subscribe({
      next: (res: any) => {
        if (res.rc) {
          const c: ContrattoModel = res.dati;
          this.dataAssunzione = c.dataAssunzione;
          this.dataDimissione = c.dataDimissione || '';
          this.stipendio = c.stipendio;
          this.ruoloID = c.ruoloID?.id;
          this.categoriaID = c.categoriaID?.id;
          this.status = c.status;
          this.employeeID = c.employeeID ?? 0;
          this.loading = false;
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore caricamento:', err)
    });
  }

  updateContratto(): void {
    const body: ContrattoRequest = {
      contrattoID: this.contrattoID,
      dataAssunzione: this.dataAssunzione,
      ruoloID: this.ruoloID,
      stipendio: this.stipendio,
      categoriaID: this.categoriaID,
      status: this.status,
      employeeID: this.employeeID
    };

    if (this.dataDimissione) {
      body.dataDimissione = this.dataDimissione;
    }

    this.contrattoS.update(body).subscribe({
      next: (res: any) => {
        if (res.rc) {
          alert('Contratto aggiornato con successo!');
          this.router.navigate(['/employee']);
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore update:', err)
    });
  }

  annulla(): void {
    this.router.navigate(['/employee']);
  }
}
