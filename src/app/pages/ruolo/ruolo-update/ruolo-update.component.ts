import { Component, OnInit } from '@angular/core';
import { RuoloServices } from '../../../services/ruolo-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RuoloRequest } from '../../../models/request/ruolo-request.model';

@Component({
  selector: 'app-ruolo-update',
  standalone: false,
  templateUrl: './ruolo-update.component.html',
  styleUrl: './ruolo-update.component.scss'
})
export class RuoloUpdateComponent implements OnInit {

  ruoloID!: number;
  descrizione = '';
  stipendioMinimo = 0;

  constructor(private route: ActivatedRoute, private ruoloS: RuoloServices, private router: Router) {}

  ngOnInit(): void {
    this.ruoloID = Number(this.route.snapshot.paramMap.get('id'));
    this.caricaDettaglio();
  }

  caricaDettaglio() {
    this.ruoloS.listById(this.ruoloID).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.descrizione = res.dati.descrizione;
          this.stipendioMinimo = res.dati.stipendioMinimo;
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore caricamento:', err)
    });
  }

  updateRuolo() {
    const body: RuoloRequest = {
      ruoloID: this.ruoloID,
      descrizione: this.descrizione,
      stipendioMinimo: this.stipendioMinimo
    };

    this.ruoloS.update(body).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.router.navigate(['/ruoli']);
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore update:', err)
    });
  }

  annulla() {
    this.router.navigate(['/ruoli']);
  }
}
